class ChangeTypeFormatOfId < ActiveRecord::Migration[5.2]
  def up
    change_column :albums, :id, :string
    change_column :tracks, :id, :string
    change_column :tracks, :album_id, :string
    change_column :artists, :id, :string
    change_column :artist_and_tracks, :artist_id, :string
    change_column :artist_and_tracks, :track_id, :string
  end

  def down
    change_column :albums, :id, :integer
    change_column :tracks, :id, :integer
    change_column :tracks, :album_id, :integer
    change_column :artists, :id, :integer
    change_column :artist_and_tracks, :artist_id, :integer
    change_column :artist_and_tracks, :track_id, :integer
  end
end
