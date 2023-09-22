import express from 'express'
import { connectToDatabase } from './services/database.service'
import { postsRouter } from './routes/posts.router'
import { usersRouter } from './routes/users.router'
import Betty from './utils/betty'

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res
    .set('Content-Type', 'application/json')
    .send(
      JSON.stringify({
        message: 'Welcome to the MERN Microblog Backend Service!',
        endpoints: [
          'GET /posts',
          'GET /posts/:id',
          'POST /posts',
          'PUT /posts/:id',
          'DELETE /posts/:id',
          'GET /users',
        ],
      })
    )
    .status(200)
  Betty.info('GET /')
})

connectToDatabase()
  .then(() => {
    app.use('/posts', postsRouter)
    app.use('/users', usersRouter)
    app.listen(port)
  })
  .catch((error: Error) => {
    Betty.error(`Error connecting to database: ${error.message}`)
  })
