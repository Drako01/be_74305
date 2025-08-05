import { Curso } from '../config/models/Curso.model.js'

export const aggregateCourses = async (req, res) => {
    try {
        const resultado = await Curso.aggregate([
            // Ordenamos los cursos Alfaveticamente
            { $sort: { name: 1 } },

            // Agrupamos todos los cursos en un unico Array
            {
                $group: {
                    _id: null,
                    cursos: { $push: "$$ROOT" },
                },
            },

            // Creamos un nuevo documento con el resumen de cursos
            {
                $project: {
                    _id: "resumenCursos",
                    totalCursos: { $size: "$cursos" },
                    cursos: 1,
                },
            },

            // Guardamos el documento en una coleccion nueva
            {
                $merge: {
                    into: "orders",
                    whenMatched: "replace",
                    whenNotMatched: "insert",
                },
            },
        ]);

        res.status(200).json({ message: "Resumen generado y guardado en 'orders'" })

    } catch (error) {
        console.error("Error, Se produjo un error en aggregateCourses. ", error);
        res.status(500).json({ error: "Error, Se produjo un error en aggregateCourses." })
    }
}