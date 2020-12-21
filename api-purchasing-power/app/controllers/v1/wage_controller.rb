require_relative '../../services/wage_service.rb'

class V1::WageController < ActionController::API
    
    def initialize
      @wage_service = WageService.new
    end

    def index
        render json: @wage_service.getWages
    end
end
