require 'net/http'

class RequestScrapService

    def initialize
        @scrap_host_api = "#{ENV['SCRAP_HOST']}/api"
    end

    def request_wages
        uri = URI("#{@scrap_host_api}/wages")
        Net::HTTP.get(uri)
    end

    def request_country_info(country)
        params = { :country => country }

        uri = URI("#{@scrap_host_api}/country-info")
        uri.query = URI.encode_www_form(params)

        Net::HTTP.get(uri)
    end

    def request_big_mac_index(country, limit = 1)

        params = { :country => country, :limit => limit }

        uri = URI("#{@scrap_host_api}/bmi")
        uri.query = URI.encode_www_form(params)

        Net::HTTP.get(uri)
    end
end