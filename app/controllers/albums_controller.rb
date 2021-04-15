class AlbumsController < ApplicationController
  def all_albums
    render json: Album.all
  end
end
