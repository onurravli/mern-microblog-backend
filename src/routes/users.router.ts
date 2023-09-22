import express, { Request, Response } from 'express'
import { collections } from '../services/database.service'
import Betty from '../utils/betty'

export const usersRouter = express.Router()
usersRouter.use(express.json())

usersRouter.get('/', async (req: Request, res: Response) => {
  try {
    const users = await collections.users?.find().toArray()
    res.status(200).send(users)
    Betty.info('GET /users')
  } catch (err: any) {
    Betty.error(err)
  }
})
