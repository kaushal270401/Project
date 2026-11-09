import mongoose from "mongoose";
import "dotenv/config"

export async function connectDatabase():Promise<void>{
    const mongoUrl= process.env.MONGODB_URI

    if (!mongoUrl) {
        throw new Error("MONGODB_URI is not defined in the environment variables");
    }

    
    try{
        await mongoose.connect(mongoUrl);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw new Error("Failed to connect to MongoDB");
    }
}