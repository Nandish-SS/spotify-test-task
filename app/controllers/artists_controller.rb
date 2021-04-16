class ArtistsController < ApplicationController
  def all_artists
    artists = Artist.all&.map do |artist|
      artist.name
    end

    render json: artists
  end
end
