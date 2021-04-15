Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/albums', to: 'albums#all_albums'
  get '/tracks', to: 'tracks#all_tracks'
  get '/artists', to: 'tracks#all_artists'

  get '/api/get_tracks', to: 'filters#fetch_track'
end
