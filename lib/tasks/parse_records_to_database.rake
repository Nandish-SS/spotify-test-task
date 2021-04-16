require 'rest-client'
require 'json'

ACCESS_TOKEN = 'BQBd_6ddCchJmz5J7a-cVeZpDNn8kIi7iJT0lihrRz94mRDgw7eHCe2nOQ6-FuTR6-OOWAEfRvuj7-tVR-7k6XhtQHYDHvxWTYqvf4VXBfknnzAZ93gbI_k5DnpWs1Eo_58871c8UpDafJinivwnSvk7IEJo8-ujlydmnAgHdtdSINo'.freeze

def add_artists(track)
  track['artists']&.each do |artist|
    Artist.create(id: artist['id'], name: artist['name']) if Artist.find_by(id: artist['id']).nil?

    ArtistsTrack.create(artist_id: artist['id'], track_id: track['id'])
  end
end

def add_tracks(album)
  tracks = album['tracks']

  tracks['items']&.each do |track|
    Track.create(
      id: track['id'],
      name: track['name'],
      album_id: album['id'],
      album_name: album['name'],
      image: album['images'][0]['url']
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
