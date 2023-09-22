import * as mongoDB from 'mongodb'
import * as dotenv from 'dotenv'
import Betty from '../utils/betty'

export const collections: {
  posts?: mongoDB.Collection
  users?: mongoDB.Collection
} = {}

export const connectToDatabase = async () => {
  Betty.info('Starting the database service.')
  try {
    Betty.info('Loading environment variables.')
    dotenv.config()
    Betty.info('Environment variables loaded.')
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(
      process.env.DB_CONN_STRING ? process.env.DB_CONN_STRING : ''
    )
    Betty.info('Connecting to database.')
    await client.connect()
    const db: mongoDB.Db = client.db(process.env.DB_NAME)
    const postsCollection: mongoDB.Collection = db.collection(
      process.env.POSTS_COLLECTION_NAME ? process.env.POSTS_COLLECTION_NAME : ''
    )
    const usersCollection: mongoDB.Collection = db.collection(
      process.env.USERS_COLLECTION_NAME ? process.env.USERS_COLLECTION_NAME : ''
    )
    collections.posts = postsCollection
    collections.users = usersCollection
    Betty.info(`Connected to database (${process.env.DB_NAME}).`)
  } catch (error: any) {
    Betty.error(`Error connecting to database: ${error.message}`)
    throw new Error(error)
  }
}
