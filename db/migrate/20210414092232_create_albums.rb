class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums, :id => false do |t|
      t.integer :id
      t.string :name
      t.string :label
      t.integer :popularity
      t.string :release_date
      t.string :image

      t.primary_key :id
      t.timestamps
    end
  end
end
