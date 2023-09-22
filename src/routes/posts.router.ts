import { collections } from '../services/database.service'
import express, { Request, Response } from 'express'
import { Post } from '../models/post'
import { ObjectId } from 'mongodb'
import Betty from '../utils/betty'

export const postsRouter = express.Router()
postsRouter.use(express.json())

postsRouter.get('/', async (req: Request, res: Response) => {
  try {
    const posts = await collections.posts?.find().toArray()
    res.status(200).send(posts)
    Betty.info('GET /posts')
  } catch (err: any) {
    Betty.error(err)
  }
})

postsRouter.get('/:id', async (req: Request, res: Response) => {
  try {
    const post = await collections.posts?.findOne({
      _id: new ObjectId(req.params.id),
    })
    res.status(200).send(post)
    Betty.info(`GET /posts/${req.params.id}`)
  } catch (err: any) {
    Betty.error(err)
  }
})

postsRouter.post('/', async (req: Request, res: Response) => {
  try {
    const post: Post = req.body
    const result = await collections.posts?.insertOne(post)
    res.status(201).send(result)
    Betty.info(`POST /posts`)
  } catch (err: any) {
    Betty.error(err)
  }
})

postsRouter.put('/:id', async (req: Request, res: Response) => {
  try {
    const post: Post = req.body
    const result = await collections.posts?.updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: post }
    )
    res.status(200).send(result)
    Betty.info(`PUT /posts/${req.params.id}`)
  } catch (err: any) {
    Betty.error(err)
  }
})

postsRouter.delete('/:id', async (req: Request, res: Response) => {
  try {
    const result = await collections.posts?.deleteOne({
      _id: new ObjectId(req.params.id),
    })
    res.status(200).send(result)
    Betty.info(`DELETE /posts/${req.params.id}`)
  } catch (err: any) {
    Betty.error(err)
  }
})
