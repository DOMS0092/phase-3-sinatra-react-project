puts "🌱 Seeding spices..."

a = Album.create(title: "4", total_time: 60, artist: "Beyonce", release_year: 2011)
Track.create(title: "1+1", genre: "pop", explicit: false, track_length: 5, album: a)

a = Album.create(title: "4", total_time: 60, artist: "Beyonce", release_year: 2011)
Track.create(title: "Best Thing I Never Had", genre: "pop", explicit: false, track_length: 4, album: a)



puts "✅ Done seeding!"
