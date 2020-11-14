require_relative '../../services/wage_service.rb'

class V1::WageController < ActionController::API
    
    def index
        render json: WageService.getWages
    end
end
