require 'redis'
require 'country'
require 'json'
require_relative 'request_scrap_service'

class WageService

    def initialize
        @redis = Redis.new(url: ENV['REDIS_URL'])
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

    def getWagesFrom(country) 

        countryName = country.instance_of?(Country) ? country.name : country

        wages = JSON.parse(getWages, object_class: OpenStruct)
        countryWage = wages.select { |w| w.country.upcase == countryName.upcase }.first

        return countryWage
    end
end