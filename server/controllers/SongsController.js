import { songsService } from '../services/SongsService'
import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'

export class SongsController extends BaseController {
  constructor() {
    super('api/songs')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getMySongs)
      .post('', this.addSong)
      .delete('/:songId', this.deleteSong)
  }

  async addSong(req, res, next) {
    try {
      const songData = req.body
      // REVIEW IMPORTANT never ever ever trust the client!!!
      songData.creatorId = req.userInfo.id

      const song = await songsService.addSong(songData)
      return res.send(song)
    } catch (error) {
      next(error)
    }
  }

  async getMySongs(req, res, next) {
    try {
      const songs = await songsService.getMySongs(req.userInfo.id)
      return res.send(songs)
    } catch (error) {
      next(error)
    }
  }

  async deleteSong(req, res, next) {
    try {
      const song = await songsService.deleteSong(req.params.songId, req.userInfo.id)
      return res.send(song)
    } catch (error) {
      next(error)
    }
  }
}
