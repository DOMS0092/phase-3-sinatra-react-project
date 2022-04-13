class Album < ActiveRecord::Base
    has_many :tracks #716 methods
    validates :title, :total_time, :artist, :release_year, presence: true
end

