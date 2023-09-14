import mongoose from "mongoose";

let isConnected = false; //track the connection status

export const connectToDB = async () => {
    mongoose.set('strictQuery', true); //this sets the mongoose options
    if(isConnected){
        console.log('MonguDB is already connected');
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "arz_kiya_hai",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected=true;

        console.log('MongoDB Connected')
    } catch (error) {
        console.log(error);
    }
}