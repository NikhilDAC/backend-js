// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import connectDB from "./db/dbfile.js";


dotenv.config({
    path:'./env'
})



connectDB()
    .then(()=>{
        const port=process.env.PORT || 60000;
        app.listen(port,()=>{
            console.log(`Server is running on port:${process.env.PORT}`);
        });
        // listen for event i.e error
        app.on("error",(error)=>{
         console.log("error",error);
         throw error
        })
    })
    .catch((err)=>{
        console.log(`MongoDB database connection error: ${err}`);
    });







// import { DB_NAME } from "./constants";
// import mongoose from mongoose;



// // always use asynch and await while connection to db buz it's time consuming process
// ;(async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}`/`${DB_NAME}`)

//     } catch (error) {
//         console.log(`ERROR:error`);
//         throw err;
//     }
// })()