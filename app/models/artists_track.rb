class ArtistsTrack < ApplicationRecord
  belongs_to :artist
  belongs_to :track
end
