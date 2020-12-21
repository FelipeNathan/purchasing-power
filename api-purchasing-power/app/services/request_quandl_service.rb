require 'net/http'
require 'json'

class RequestQuandlService

    def initialize
        @api_base = ENV['QUANDL_API']
    end

    def request_bmi( country, limit = 1 )
        uri = URI("#{@api_base}/ECONOMIST/BIGMAC_#{country}/data.json")    
        bmi = do_get uri, { :limit => limit }
        parse_bmi bmi
    end

    def request_brazilian_wage( limit = 1 )
        uri = URI("#{@api_base}/BCB/1619/data.json")
        bmi = do_get uri, { :limit => limit }
        parse_bmi bmi
    end

    private
        def parse_bmi(bmi)

            bmi = JSON.parse(bmi, object_class: OpenStruct)

            return {
                :columns => bmi.dataset_data.column_names,
                :data => bmi.dataset_data.data
            }
        end

        def do_get(uri, params = {})

            params.merge!({
                :api_key => ENV['QUANDL_API_KEY']
            })

            uri.query = URI.encode_www_form(params)

            response = Net::HTTP.get_response uri

            raise "Failed to load data: #{response.message}" unless response.is_a? Net::HTTPSuccess
        
            return response.body
        end
end