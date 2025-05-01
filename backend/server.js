import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'



//app config
const app = express()
const port = 4000

// Middleware
app.use(cors())
app.use(express.json())

// connect database
connectDB();

//api endpoints
app.use('/api/food', foodRouter);
app.use('/images',express.static('uploads'));


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


