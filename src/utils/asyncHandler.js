

// higer order function=> a function which accept fun as argument or return the function
// using promise

const asyncHandler=(requestHandler)=>{
   return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((error)=>next(error))
    }
}


//using try catch
// here we making the wrapper function for database.This function accept another function & return 
// response
// const asyncHandler=(fun)=>async(req,res,next)=>{
//     try {
//         await fun(req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }

export  {asyncHandler};