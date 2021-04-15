class TracksController < ApplicationController
  def all_tracks
    render json: Track.all
  end
end
