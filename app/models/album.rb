class Album < ActiveRecord::Base
    has_many :tracks #716 memthods now with Active method
end
