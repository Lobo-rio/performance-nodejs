import 'express-async-errors'
import express from 'express'

import { routes } from './routes'
import { errorMiddleware } from './middlewares/error'

export const app = express()

app.use(express.json())

app.use(routes)

app.use(errorMiddleware)
