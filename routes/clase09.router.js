import { Router } from "express";
import { Curso } from "../config/models/Curso.model.js"
import { User } from "../config/models/User.model.js"

const router = Router();

// Demo de Populate
router.get('/demo', async (req, res) => {
    const cursos = await Curso.find().populate('students', 'name email age _id');
    res.json(cursos);
})


export default router;