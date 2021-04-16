require 'rest-client'
require 'json'

ACCESS_TOKEN = 'BQANYzD4jtsKLuPFqWiq80FdjFnlsIw_C-pi-UDpLAT6ChDvphqvAH6Ywoav3L5jIIqTYQX935hQMziboYVvGJQ_2DgTbQWcg31mFDHIfHzkhrsaKotxjHF63DIqZqEMxQDyWTxtBAzZM9GQlSXEkm_G_2U26mJgJhHvC88LhkfdqcY'.freeze

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
