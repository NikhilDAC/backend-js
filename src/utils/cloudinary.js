import { v2 as cloudinary } from "cloudinary";
import fs from "fs"

// configure the cloudnary
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
})

/*  write a function who will upload file from local server  to cloudinary if file is uploaded
 successfully then we will unlink(remove) file from local server.
*/ 


const uploadFile= async (localFilePath)=>{
try {
    if(!localFilePath) return null;
    // upload file on cloudinary
    const response=await cloudinary.uploader.upload(localFilePath,{
        resource_type:auto
    });
    // file upload successfully
    console.log("File upload successfully.!! ",response);
    // fs.unlink(localFilePath);
    return response;
    
} catch (error) {
    fs.unlink(localFilePath);// remove the file from the local server when the upload operation got faild.
    return null;
}
}
