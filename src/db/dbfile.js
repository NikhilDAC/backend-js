
import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB= async ()=>{
    try{
        const dbInstant=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`\n MongoDB connected!! DB HOST:${dbInstant.connection.host}`);
    } catch (error) {
        console.log(`MongoDB Connection Faild:${error}`);
        process.exit(1);
    }
}

// const connectDB= async()=>{
//     try {
//         const dbInstance=mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//         console.log('\n MongoDB Connected..!! DB HOST:${dbInstance.connection.host}');
//     } catch (error) {
//         console.log(`MongoDb Error:${error}`);
//         process.exit(1);
//     }
//}
export default connectDB;