import { dbContext } from '../db/DbContext'

class SongsService {
  async deleteSong(songId, userId) {
    // const songToDelete = await dbContext.Songs.findById(songId)
    // if (!songToDelete) {
    //   throw new Error('Not a valid song Id')
    // }
    // // @ts-ignore
    // if (songToDelete.creatorId.toString() !== userId) {
    //   throw new Error('That is not your song')
    // }
    // await songToDelete.remove()
    // return songToDelete
    return await dbContext.Songs.findOneAndDelete({ _id: songId, creatorId: userId })
  }

  async getMySongs(id) {
    return await dbContext.Songs.find({ creatorId: id })
  }

  async addSong(songData) {
    return await dbContext.Songs.create(songData)
  }
}

export const songsService = new SongsService()
