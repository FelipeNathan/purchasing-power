require_relative '../../services/request_scrap_service.rb'

class V1::CountryController < ApplicationController

    def index
        render json: Country.all.map { |c| { :abbrev => c.abbrev, :name => c.name } }
    end

    def info
        country = RequestScrapService.new.request_country_info(params[:country])
        render json: country
    end

    def big_mac_index
        bmi = RequestScrapService.new.request_country_info(params[:country])
        render json: bmi
    end
end
