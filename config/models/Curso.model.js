import mongoose from "mongoose";

const cursoShema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        index: true,
    },
    description: {
        type: String,
    },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

export const Curso = mongoose.model('Curso', cursoShema)