import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

// this package used as plugin. We can write the complex query with it.
const videoSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,

    },
    description:{
        type:String,
        require:true,
    },
    duration:{
        type:Number,
        require:true,
    },
    video:{
        type:String,// cloudnary
        require:true,
    },
    thumbnell:{
        type:String,
        required:true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        reff:"User"
    }
},{timestamps:true})

videoSchema.plugin(mongooseAggregatePaginate)

export const Video=mongoose.model("Video",videoSchema);