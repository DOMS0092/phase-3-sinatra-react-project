class CreateAlbums < ActiveRecord::Migration[6.1]
  def change
    create_table :albums do |t|
      t.string :title
      t.integer :total_time
      t.string :artist
      t.integer :release_year

      t.timestamps null: false
    end
  end
end
