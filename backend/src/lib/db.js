import mongoose from 'mongoose'

export const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MondoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log('mongoDB connection error', error)
    }
};