class CreateArtistAndTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :artist_and_tracks do |t|
      t.belongs_to :artist
      t.belongs_to :track
    end
  end
end
