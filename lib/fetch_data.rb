class FetchData
  def self.call(params)
    return tracks unless params

    tracks
      .merge filter_tracks(params['tracks'])
      .merge filter_albums(params['albums'])
      .merge filter_artists(params['artists'])
      .merge filter_year(params['year'])
      .merge filter_popularity(params['popularity'])
  end

  def self.filter_tracks(track_labels)
    return tracks if track_labels.nil?

    tracks.where("tracks.name in ('#{track_labels}')")
  end

  def self.filter_albums(album_labels)
    return tracks if album_labels.nil?

    tracks.joins(:album).where("albums.name in ('#{album_labels}')")
  end

  def self.filter_artists(artist_labels)
    return tracks if artist_labels.nil?

    tracks.joins(:artists).where("artists.name in ('#{artist_labels}')")
  end

  def self.filter_year(year)
    return tracks if year.nil?

    tracks.joins(:album).where("SUBSTRING(albums.release_date, 1, 4) >= '#{year}'")
  end

  def self.filter_popularity(popularity)
    return tracks if popularity.nil?

    tracks.joins(:album).where("albums.popularity >= #{popularity}")
  end

  def self.tracks
    Track.includes(:album, :artists).all
  end
end
