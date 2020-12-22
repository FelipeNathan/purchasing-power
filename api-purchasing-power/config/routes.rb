Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  scope :api, defaults: {format: :json} do

    devise_for :users
    
    namespace :v1 do

      resources :wage, only: [:index]
      # resources :sessions, only: [:create, :destroy]

      # Country
      get 'country', to: 'country#index'
      get 'country/info', to: 'country#info'
      get 'country/bmi', to: 'country#big_mac_index'
    end
  end

end
