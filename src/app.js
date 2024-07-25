import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";


const app=express();
// configure the cookies/cors after the app
// app.use() method mostly used for setting the middleware,configuration

app.use(cors({
    // whitelisting the URL
    origin:process.env.CORS_ORIGIN
}))
/*
on server we accept the data in the lot's of format such as json,form,string,file
to handle this we need to configure it.For confuring it we need to use app.use()
*/
app.use(express.json({limit:"16kb"}))

// to handle the data which is coming from the url

app.use(express.urlencoded({extended:true,limit:"16kb"}));

// to store the assect such as pdf,image etc
app.use(express.static("public"))

// cookie parse mostly used for to read the cookie from clint browser and manuplate it basically to
// perform the CRUD on cookie. only server can understand & delete thise cookie.
app.use(cookieParser());

export default app;