class CreateTracks < ActiveRecord::Migration[6.1]
  def change
    create_table :tracks do |t|
      t.string :title
      t.string :genre
      t.boolean :explicit
      t.integer :track_length
      t.belongs_to :album
      

      t.timestamps null: false
    end
  end
end
