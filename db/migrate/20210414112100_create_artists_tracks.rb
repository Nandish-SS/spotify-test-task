class CreateArtistsTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :artists_tracks do |t|
      t.belongs_to :artist
      t.belongs_to :track
    end
  end
end
