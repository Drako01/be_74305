import { Router } from "express";
import { Curso } from '../config/models/Curso.model.js'
import { User } from '../config/models/User.model.js'

const router = Router();


// Obtener todos lo Cursos
router.get('/', async (req, res) => {
    const cursos = await Curso.find();
    res.status(200).json(cursos);
});

router.post('/', async (req, res) => {
    try {
        const newCourse = await Curso.create(req.body);
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});

router.post('/:couserId/inscription/:studentId', async (req, res) => {
    try {
        const course = await Curso.findById(req.params.couserId);
        const student = await User.findById(req.params.studentId);

        if (!course || !student) {
            return res.status(404).json({ error: "Curso o Alumno no encontrado" })
        }

        // Validar que el alumno no este inscripto previamente
        if (course.students.includes(student._id)) {
            return res.status(400).json({ error: `El Alumno ${student.name} ya estaba inscripto en el curso ${course.title}` })
        }

        course.students.push(student._id);
        await course.save();

        res.status(202).json({ message: `El Alumno ${student.name} fue inscripto en el curso ${course.title}` })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

router.delete('/:couserId/inscription/:studentId', async (req, res) => {
    try {
        const course = await Curso.findById(req.params.couserId);

        if (!course) {
            return res.status(404).json({ error: "Curso no encontrado" })
        }

        course.students = course.students.filter(
            (id) => id.toString() !== req.params.studentId
        )
        await course.save();

        res.status(202).json({ message: `Alumno eliminado del curso ${course.title} correctamente.!` })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

router.delete('/:couserId', async (req, res) => {
    try {
        const course = await Curso.findByIdAndDelete(req.params.couserId);
        if (!course) {
            return res.status(404).json({ error: "Curso no encontrado" })
        }
        res.status(204).json()
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});


export default router;