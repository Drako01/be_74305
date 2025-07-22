import { Router } from "express";
import { User } from '../config/models/User.model.js'
import mongoose from "mongoose";

const router = Router();


// Obtener todos lo Usuarios
router.get('/', async (req, res) => {
    const users = await User.find();
    res.json(users);
});


// Crear un nuevo Usuario
router.post('/', async (req, res) => {
    try {
        const { name, email, age } = req.body;
        if (!name || !email || !age) {
            return res.status(400).json({ error: "Todos los datos son requeridos" })
        }

        const user = new User({ name, email, age });
        await user.save();

        res.status(201).json({ message: "Usuario creado con exito", user })

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});

// Buscar un Usuario por su ID
router.get('/:id', async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ error: 'ID Invalido' })
        }
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ error: 'Usuario no encontrado.' })
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});


// Actualizar usuarios segun su id
router.put('/:id', async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ error: 'ID Invalido' })
        }
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!user) return res.status(404).json({ error: 'Usuario no encontrado.' })
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});

// Eliminar Usuario
router.delete('/:id', async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ error: 'ID Invalido' });
        }; 
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ error: 'Usuario no encontrado.' })
        res.json({ message: 'Usuario Eliminado con exito.!!!!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})


export default router;