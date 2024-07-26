import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true,
        trim:true
    },
    userName:{
        type:String,
        require:true,
        unique:true,
        trim:true,
        lowercase:true,
        index:true,
    },
    fullName:{
        type:String,
        require:true,
        unique:true,
        trim:true
    },
    watchedHistory:[
        {
            type:mongoose.Schema.Types.ObjectId,
            reff:"Video",
        }
    ],
    password:{
        type:String,
        require:true,
    }
    
});
// generate refersh & access token using jwt
userSchema.methods.generateAccessToken=function(){
    return jwt.sign(
        {_id:this._id,
         email:this.email,
         name:this.fullName,
    },
    process.env.ACCESS_TOKEN_SECRECT,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
)
};
userSchema.methods.generateRefershToken=function(){
    return jwt.sign(
        {_id:this._id,
         // we putless information inside the referesh token
    },
    process.env.REFRESH_TOKEN_SECRECT,
    {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
)
};
//crypting is timeconsuming process it will take some time
userSchema.pre("save", async function(next){

    if(this.isModified("password")) {;

    this.password= bcrypt.hash(this.password,10)
    next()
    }
});

// we can also add method into the userSchema.
userSchema.methods.isPasswardCorrect = async function(password){
 return await bcrypt.compare(password,this.password);
};
export const User=mongoose.model("User",userSchema)