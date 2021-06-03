import mongoose from 'mongoose'
const ObjectId = mongoose.Schema.Types.ObjectId

export const SongSchema = new mongoose.Schema({
  title: { type: String, required: true },
  albumArt: { type: String, required: true },
  preview: { type: String, required: true },
  creatorId: { type: ObjectId, ref: 'Account', required: true }
}, { timestamps: true, toJSON: { virtuals: true } })
