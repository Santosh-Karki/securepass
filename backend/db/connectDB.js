
import mongoose from 'mongoose';

export const connectDB = async(req, res) =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`)

    }catch(error){
        console.log('error connecting to the mongoDB', error)
    }
}