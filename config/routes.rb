Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home#index'
  
  get '/albums', to: 'albums#all_albums'
  get '/tracks', to: 'tracks#all_tracks'
  get '/artists', to: 'artists#all_artists'

  get '/api/get_tracks', to: 'filters#fetch_track'

end
