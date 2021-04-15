class ArtistsController < ApplicationController
  def all_tracks
    render json: Artist.all
  end
end
