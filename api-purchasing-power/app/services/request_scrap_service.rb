require 'net/http'

class RequestScrapService

    def initialize
        @api_base = ENV['SCRAP_HOST'] + "/api"
    end

    def request_wages
        uri = URI("#{@api_base}/wages")
        Net::HTTP.get(uri)
    end

    def request_country_info(country)
        params = { :country => country }

        uri = URI("#{@api_base}/country-info")
        uri.query = URI.encode_www_form(params)

        Net::HTTP.get(uri)
    end

    def request_big_mac_index(country, limit = 1)

        params = { :country => country, :limit => limit }

        uri = URI("#{@api_base}/bmi")
        uri.query = URI.encode_www_form(params)

        Net::HTTP.get(uri)
    end
end