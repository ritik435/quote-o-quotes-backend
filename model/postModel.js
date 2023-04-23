import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new Schema({
  slogan: {
        type: String,
        required: true,
      },
      credits: {
        type: String,
        default:"anonymous"
      },
},{ __v : false });

const Post = mongoose.model('News', postSchema);
export default Post;