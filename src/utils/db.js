import mongoose from "mongoose"

const MONGODB_URL = process.env.MONGO_URL; 

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to database ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error : ${error}`);
    }
}
export default connectDB;