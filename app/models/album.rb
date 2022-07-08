class Album < ActiveRecord::Base
    has_many :tracks #716 methods

    def all_albums
        binding.pry
    end


    def self.longest_title
        self.all.max_by do |album|
            album.title.length
        end
    end

    # def self.most_tracks
    # # Album.all.max_by do |album|
    #         Album.select('album.id').from('')
    

    validates :title, :total_time, :artist, :release_year, presence: true
end


