require 'redis'
require 'country'
require 'json'
require "active_support/core_ext"
require_relative 'request_scrap_service'
require_relative 'request_quandl_service'

class WageService
  
  def initialize
    @redis = Redis.new(url: ENV['REDIS_URL'])
    @quandl_service = RequestQuandlService.new
  end
  
  def get_wages
    data = @redis.get("wage_list")
    
    if data.nil?
      puts "**** Requesting to new scrap ****"
      data = RequestScrapService.new.request_wages
      @redis.setex "wage_list", 6.month.to_i, data
    end
    
    return data
  end
  
  def create_or_update_wage(country, wageInfo)
    wages = JSON.parse(get_wages, object_class: OpenStruct)
    countryWage = wages.select { |w| w.country.upcase == country.name.upcase }.first
    
    wageInfo = WageInfo.new if wageInfo.nil?
    wageInfo.year_of_wage = countryWage.date.to_i
    wageInfo.min_wage = countryWage.minWage.to_f
    wageInfo.symbol = countryWage.symbol
    
    if country.abbrev.upcase == "BRA"
      brazilianWages = @quandl_service.request_brazilian_wage
      wageInfo.year_of_wage = brazilianWages[:data].first[0].split('-')[0].to_i
      wageInfo.min_wage = brazilianWages[:data].first[1]
    end

    wageInfo.country = country
    wageInfo.save
    wageInfo
  end

  def get_wages_from(country) 
    wageInfo = WageInfo.where(country: country).first 
    
    if wageInfo.nil? || (DateTime.now - wafeInfo.updated_at) > 182 # se passar de 6 meses da informação
      wageInfo = create_or_update_wage(country, wageInfo)
    end

    wageInfo
  end
end