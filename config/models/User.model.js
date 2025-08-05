import mongoose from "mongoose";

const userShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    age: {
        type: Number,
        required: true,
    }
});

userShema.pre('save', function(next){
    console.log(`👤 Guardando nuevo usuario: ${this.name}`)
    next();
})

userShema.post('find', function(result){
    console.log(`🔎 Se consultaron ${result.length} usuarios.!`);
})

export const User = mongoose.model('User', userShema)