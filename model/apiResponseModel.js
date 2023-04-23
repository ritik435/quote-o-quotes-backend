import mongoose from "mongoose";
const { Schema } = mongoose;

const apiResponseSchema = new Schema({
    status: {
        type: Number
      },
      description: {
        type: String
      },
      result:{
        type: Array,
        select: false
      }
},
{ _id : false });

const ApiResponse = mongoose.model('Api', apiResponseSchema);
export default ApiResponse;