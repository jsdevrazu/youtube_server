import mongoose from "mongoose";

export const commentSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    videoId:{
        type:String,
        required: true,
    },
    desc:{
        type:String,
        required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Comment", commentSchema);
