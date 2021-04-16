class FiltersController < ApplicationController
  require 'fetch_data'

  def index
    tracks = FetchData.call(params)&.sort_by(&:album_name)

    render json: tracks
  end
end
