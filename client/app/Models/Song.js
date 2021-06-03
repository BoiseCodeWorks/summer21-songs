export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title
    this.albumArt = data.albumArt || data.artworkUrl100.replace(/100x100/g, '300x300')
    this.artist = data.artistName || data.artist
    this.album = data.collectionName || data.album
    this.price = data.trackPrice || data.price
    this.preview = data.previewUrl || data.preview
    this.trackId = data.trackId || data._id
  }

  get Template() {
    return `
        <div class="col-md-4">
          <div class="card">
            <img src="${this.albumArt}">
            <div class="card-body">
              <h4>${this.title}</h4>
              <button class="btn btn-primary my-3" onclick="app.songsController.addSong('${this.trackId}')">Add Song</button>
            </div>
          </div>
        </div>
        `
  }

  get playlistTemplate() {
    return `
        `
  }
}
