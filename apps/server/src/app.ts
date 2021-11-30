import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import { registerRoutes } from '@belette/rest-utils'
import { routes } from './routes/routes'

const app = express()

app.use(cors({ origin: true }))
app.use(morgan('dev'))

registerRoutes(app, routes)

export default app
