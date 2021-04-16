class FiltersController < ApplicationController
  require 'fetch_data'

  def fetch_track
    tracks = FetchData.call(params)

    render json: tracks
  end
end
