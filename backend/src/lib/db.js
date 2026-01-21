import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_URL);
    console.log(`DB Connected Successfuly`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
