import mongoose from "mongoose";

const username = "ritik435";
const password = "tJ7CMqZTEdjpAeui";
const cluster = "Cluster0";
const dbname = "quote";

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}.qoomi0j.mongodb.net/${dbname}?retryWrites=true&w=majority`);
    console.log('MongoDB connected!');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
};

export default connectDB;

