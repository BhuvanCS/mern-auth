import mongoose from 'mongoose';

const connectDB = async () => {
  
    try{
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo DB Connection established: "+connection.connection.host);
    }catch(err){
        console.error("Error connecting to MongoDB: "+err.message);
        process.exit(1);
    }
}

export default connectDB;