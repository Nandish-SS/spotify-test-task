class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks, :id => false do |t|
      t.integer :id
      t.string :name
      t.string :image
      t.string :album_name
      t.references :album

      t.primary_key :id
      t.timestamps
    end
  end
end
