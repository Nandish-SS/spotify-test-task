class TracksController < ApplicationController
  def index
    tracks = Track.all&.map do |track|
      track.name
    end

    render json: tracks
  end
end
