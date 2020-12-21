require_relative '../../services/wage_service.rb'
require_relative '../../services/bmi_service.rb'
require_relative '../../services/request_quandl_service.rb'
require 'json'

class V1::CountryController < ActionController::API
  
  def initialize
    @quandl_service = RequestQuandlService.new
    @wage_service = WageService.new 
    @bmi_service = BmiService.new
  end
  
  def index
    render json: Country.all.map { |c| { :abbrev => c.abbrev, :name => c.name } }
  end
  
  def info
    country = Country.where(:abbrev => params[:country]).first
    bmi = @bmi_service.get_bmi_by_country(country)
    wage = @wage_service.getWagesFrom(country)
    
    render json: {
      wage: wage.as_json(:except => [:created_at, :updated_at, :country_id]),
      bmi: bmi.as_json(:except => [:created_at, :updated_at, :country_id])
    }
  end

  def big_mac_index
    bmi = @quandl_service.request_bmi(params[:country], params[:limit] || 1)
    render json: bmi
  end
end
