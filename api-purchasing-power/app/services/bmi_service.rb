require "active_support/core_ext"

class BmiService
  
  def initialize
    @quandl_service = RequestQuandlService.new
  end 

  def get_bmi_by_country(country)
    bmi = Bmi.where(:country => country).first
    
    puts "REQUESTING BMI #{bmi}"
    if bmi.nil?
      new_bmi = @quandl_service.request_bmi(country&.abbrev&.upcase, 1)
      bmi = map_fields(new_bmi)
      bmi.country = country
      bmi.save
    end

    bmi
  end

  private 
    # transform 
    # this {
    #   columns: ["Date", "local_price", "dollar_ex", "dollar_price", "dollar_ppp", "dollar_valuation","dollar_adj_valuation","euro_adj_valuation"]
    #   data: [["2020-07-31", 20.9, 5.34, 3.91, 3.66, -31.462, 19.1, 16.8], [//older info if wanna get]]
    # } 
    # to this {
    #   date: "2020-07-31",
    #   local_price: 20.9,
    #   dollar_ex: 5.34,
    #   dollar_price: 3.91,
    #   dollar_ppp: 3.66
    #   dollar_valuation: -31.462,
    #   dollar_adj_valuation: 19.1,
    #   euro_adj_valuation: 16.8,
    # }
    def map_fields(bmi)

      json = bmi[:data].first

      Bmi.new(
        date: json[0].to_date,
        local_price: json[1].to_f,
        dollar_ex: json[2].to_f,
        dollar_price: json[3].to_f,
        dollar_ppp: json[4].to_f,
        dollar_valuation: json[5].to_f,
        dollar_adj_valuation: json[6].to_f,
        euro_adj_valuation: json[7].to_f,
      )
      
    end
end