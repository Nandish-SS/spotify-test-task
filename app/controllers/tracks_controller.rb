class TracksController < ApplicationController
  def all_tracks
    tracks = Track.all&.map do |track|
      track.name
    end

    render json: tracks
  end
end
