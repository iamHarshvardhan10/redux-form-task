import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()


// test api 
app.get('/api', (req, res) => {
    res.json({
        success: true,
        message: 'test is successfully runnig correctly'
    })
})
app.listen(process.env.PORT || 1000, () => {
    console.log('app is running on')
})