require 'redis'
require_relative '../../services/request_scrap_service.rb'

class V1::WageController < ActionController::API
    
    def initialize
        @redis = Redis.new(url: ENV['REDIS_URL'])
    end
    
    def index
        data = @redis.get("wage_list")

        if data.nil?
            data = RequestScrapService.new.request_wages
        end

        render json: data
    end
end
