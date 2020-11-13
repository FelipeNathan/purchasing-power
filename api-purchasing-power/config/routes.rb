Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :v1 do

    # Wage
    resources :wage, only: [:index]

    # Country
    get 'country', to: 'country#index'
    get 'country/info', to: 'country#info'
    get 'country/bmi', to: 'country#big_mac_index'
  end


end
