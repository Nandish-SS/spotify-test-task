class FiltersController < ApplicationController
  require 'fetch_data'

  def fetch_track
    tracks = FetchData.call(params)&.sort_by(&:album_name)

    render json: tracks
  end
end
