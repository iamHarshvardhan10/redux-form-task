import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
// import datababse
import { dbConnection } from './config/database.js'
// routes
import userRoutes from './routes/user.route.js'
const app = express()
app.use(express.json())

dbConnection()

// test api 
app.get('/api', (req, res) => {
    res.json({
        success: true,
        message: 'test is successfully runnig correctly'
    })
})

// defining routes 
app.use('/api/v1/user' , userRoutes)




app.listen(process.env.PORT || 1000, () => {
    console.log('app is running on')
})