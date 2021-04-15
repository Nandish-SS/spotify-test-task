class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists, :id => false do |t|
      t.integer :id
      t.string :name

      t.primary_key :id
      t.timestamps
    end
  end
end
