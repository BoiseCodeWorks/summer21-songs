import mongoose from 'mongoose'
import { Value as ValueSchema } from '../models/Value'
import { AccountSchema } from '../models/Account'
import { SongSchema } from '../models/Song'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Songs = mongoose.model('Song', SongSchema)
}

export const dbContext = new DbContext()
