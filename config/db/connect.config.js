import mongoose from "mongoose";

export const connectToMongoDB = async () => {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/clientes');
        console.log('✅ MongoDB Conectado a http://127.0.0.1:27017');
    }catch(error){
        console.error("❌ Error al conectar a MongoDB: ",error)
        process.exit(1);
    }
};