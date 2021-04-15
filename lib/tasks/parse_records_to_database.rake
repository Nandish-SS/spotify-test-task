require 'rest-client'
require 'json'

ACCESS_TOKEN = 'BQDJsXLI5MAazo5JkMKxB-P2OBZyyBskUqKPTOMhZ5B00z5y4Hu6lmk48UeJjPDmabFpvSQjivmW7XphZXLV2dCyDv8YUP5tB_ob-M5yUgkKG0oDJE-JwkTzn39lGK6QcQzH2yH_5uXr5hvqit9Nc-V43v3ulEV3aeIRJZ8jpSB18kk'.freeze

def add_artists(track)
  track['artists']&.each do |artist|
    Artist.create(id: artist['id'], name: artist['name']) if Artist.find_by(id: artist['id']).nil?

    ArtistAndTrack.create(artist_id: artist['id'], track_id: track['id'])
  end
end

def add_tracks(album)
  tracks = album['tracks']

  tracks['items']&.each do |track|
    Track.create(
      id: track['id'],
      name: track['name'],
      album_id: album['id']
    )

    add_artists(track)
  end
end

def add_albums(albums)
  albums&.each do |album|
    Album.create(
      id: album['id'],
      image: album['images'][0]['url'],
      label: album['label'],
      name: album['name'],
      popularity: album['popularity'],
      release_date: album['release_date']
    )

    add_tracks(album)
  end
end

task parse_records_to_database: :environment do |_t, _args|
  auth = {
    "Authorization": "Bearer #{ACCESS_TOKEN}"
  }

  endpoint = RestClient.get(
    'https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc&market=ES',
    headers = auth
  )

  json = JSON.parse(endpoint)

  add_albums(json['albums'])
end
