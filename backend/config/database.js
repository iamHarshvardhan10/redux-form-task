import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
export const dbConnection = async () => {
    try {
        mongoose.connect((process.env.MONGO_URL))
        .then(() => {
            console.log('MongoDB connected')
        })
        .catch((error) => {
            console.log('Connection failed',error)
        })
    } catch (error) {
        console.log(error);
    }
}