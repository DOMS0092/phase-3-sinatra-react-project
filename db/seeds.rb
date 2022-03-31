puts "🌱 Seeding spices..."

a = Album.create(title: "4", total_time: 60, artist: "Beyonce", release_year: 2011)
Track.create(title: "1+1", genre: "pop", explicit: false, track_length: 5, album: a)

a = Album.create(title: "Good Time", total_time: 43, artist: "Niko Moon", release_year: 2021)
Track.create(title: "Good Time", genre: "country", explicit: false, track_length: 4, album: a)


puts "✅ Done seeding!"
