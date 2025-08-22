import mongoose from 'mongoose'

export const connectMongo = async () => {
  const uri = process.env.MONGO_URI
  if (!uri) {
    throw new Error('MONGO_URI not set')
  }
  mongoose.set('strictQuery', true)
  await mongoose.connect(uri, { dbName: process.env.MONGO_DB || 'healthlock' })
  console.log('Mongo connected')
}