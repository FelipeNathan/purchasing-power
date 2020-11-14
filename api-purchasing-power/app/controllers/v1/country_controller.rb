require_relative '../../services/wage_service.rb'
require_relative '../../services/request_quandl_service.rb'

class V1::CountryController < ActionController::API

    def index
        render json: Country.all.map { |c| { :abbrev => c.abbrev, :name => c.name } }
    end

    def info
        quandl = RequestQuandlService.new

        country = Country.where(:abbrev => params[:country]).first
        wage = WageService.new.getWagesFrom country
        bmi = quandl.request_bmi(params[:country], params[:limit] || 1)
        
        if (country.abbrev.upcase == "BRA")
            brazilianWages = quandl.request_brazilian_wage
            wage.date = brazilianWages[:data].first.first.split('-')[0]
            wage.minWage = brazilianWages[:data].first[1]
        end

        render json: {}.merge!(wage.to_h).merge!({
            :bmi => map_bmi_head(bmi),
            :data => bmi[:data]
        })
    end

    def big_mac_index
        bmi = RequestQuandlService.new.request_bmi(params[:country], params[:limit] || 1)
        render json: bmi
    end

    private 
        def map_bmi_head(bmi)
            hash = { }
            bmi[:data].first.map.with_index { |b, i|  hash[bmi[:columns][i]] = b }

            return hash
        end
end
