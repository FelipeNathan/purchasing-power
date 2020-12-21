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
  
  def getWages
    data = @redis.get("wage_list")
    
    if data.nil?
      puts "**** Requesting to new scrap ****"
      data = RequestScrapService.new.request_wages
      @redis.setex "wage_list", 6.month.to_i, data
    end
    
    return data
  end
  
  def getFromScrap(country)
    wages = JSON.parse(getWages, object_class: OpenStruct)
    countryWage = wages.select { |w| w.country.upcase == country.name.upcase }.first
    
    wageInfo = WageInfo.new(
      year_of_wage: countryWage.date.to_i,
      min_wage: countryWage.minWage.to_f,
      symbol: countryWage.symbol
    )
    
    if country.abbrev.upcase == "BRA"
      brazilianWages = @quandl_service.request_brazilian_wage
      wageInfo.year_of_wage = brazilianWages[:data].first[0].split('-')[0].to_i
      wageInfo.min_wage = brazilianWages[:data].first[1]
    end

    wageInfo.country = country
    wageInfo.save
    wageInfo
  end

  def getWagesFrom(country) 
    wageInfo = WageInfo.where(country: country).first || getFromScrap(country)
  end
end