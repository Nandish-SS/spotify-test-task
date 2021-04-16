class ArtistsController < ApplicationController
  def index
    artists = Artist.all&.map do |artist|
      artist.name
    end

    render json: artists
  end
end
