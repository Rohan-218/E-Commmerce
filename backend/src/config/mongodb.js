import mongoose from "mongoose";

const connectDB = async () => {
    
    await mongoose.connect(`${process.env.MONGODB_URI}/fluke-clothing`)
        .then(() => {
            console.log("Connected to MongoDB")
        }).catch((err) => {
            console.error("Error connecting to MongoDB", err)
            process.exit(1)
        })

};

export default connectDB;
    