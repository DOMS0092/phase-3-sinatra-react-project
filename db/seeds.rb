puts "🌱 Seeding spices..."

a = Album.create(title: "4", total_time: 60, artist: "Beyonce", release_year: 2011)
Track.create(title: "1+1", genre: "pop", explicit: false, track_length: 5, album: a)

# a = Album.create(title: "4", total_time: 60, artist: "Beyonce", release_year: 2011)
# Track.create(title: "Love on top", genre: "pop", explicit: false, track_length: 5, album: a)

# a = Album.create(title: "Good Time", total_time: 43, artist: "Niko Moon", release_year: 2021)
# Track.create(title: "Good Time", genre: "country", explicit: false, track_length: 4, album: a)

# a = Album.create(title: "Hot Pink", total_time: 40, artist: "Doja Cat", release_year: 2021)
# Track.create(title: "Kiss me more", genre: "R&B", explicit: true, track_length: 4, album: a)

# a = Album.create(title: "21", total_time: 52, artist: "Adele", release_year: 2011)
# Track.create(title: "Rumour has it", genre: "pop", explicit: false, track_length: 4, album: a)

# a = Album.create(title: "34+35", total_time: 52, artist: "Ariana Grande", release_year: 2021)
# Track.create(title: "Positions", genre: "pop", explicit: true, track_length: 3, album: a)

puts "✅ Done seeding!"
