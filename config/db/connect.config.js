import mongoose from "mongoose";

export const connectToMongoDB = async () => {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/coderhouse');
        console.log('✅ MongoDB Conectado a http://127.0.0.1:27017');
    }catch(error){
        console.error("❌ Error al conectar a MongoDB: ",error)
        process.exit(1);
    }
};

export const connectToMongoDBAtlas = async () => {
    try{
        await mongoose.connect('mongodb+srv://aleddistefano:QLbAsSXFBqgMsne6@codehouse.cfacxsr.mongodb.net/coderhouse?retryWrites=true&w=majority');
        console.log('✅ MongoDB Conectado a Atlas');
    }catch(error){
        console.error("❌ Error al conectar a MongoDB Atlas: ",error)
        process.exit(1);
    }
};

