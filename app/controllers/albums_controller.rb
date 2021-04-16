class AlbumsController < ApplicationController
  def index
    albums = Album.all&.map do |album|
      album.name
    end

    render json: albums
  end
end
