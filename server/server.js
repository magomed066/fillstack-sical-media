import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import colors from 'colors'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
import user from './routes/user.js'
import connectDB from './config/db.js'

dotenv.config()
connectDB()

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/', async (req, res) => {
	res.send('API is running!')
})

app.use('/api/user', user)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
	console.log(`Server is running on ${PORT} port.`.yellow.bold)
})
