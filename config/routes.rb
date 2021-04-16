Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home#index'
  resources :albums, only: [:index]
  resources :tracks, only: [:index]
  resources :artists, only: [:index]
  resources :filters, only: [:index]
end
