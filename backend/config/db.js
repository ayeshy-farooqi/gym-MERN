import mongoose from "mongoose";


// Connect to MongoDB
const connectToMongoDb = async ()=>{

try{
    mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
}catch{
    console.error("Error connecting to MongoDB");
}
}

export default connectToMongoDb;