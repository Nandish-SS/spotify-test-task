class AlbumsController < ApplicationController
  def all_albums
    albums = Album.all&.map do |album|
      album.name
    end

    render json: albums
  end
end
