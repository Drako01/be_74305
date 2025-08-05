import express from 'express';
import { connectToMongoDB, connectToMongoDBAtlas } from './config/db/connect.config.js';

import homeRouter from './routes/home.router.js';
import studentsRouter from './routes/students.router.js';
import coursesRouter from './routes/courses.router.js';
import popularRouter from './routes/clase09.router.js';
import aggregateRouter from './routes/aggregations.router.js';


const app = express();

app.use(express.json());

const PORT = 3000;

/** 3) Routers */
app.use('/', homeRouter);
// Rutas API
app.use('/api/students', studentsRouter);
app.use('/api/courses', coursesRouter);
app.use('/api/popular', popularRouter);
app.use('/api/aggregations', aggregateRouter);

/** 4) Seteo de Error 404 */
app.use((req, res) => {
    res.status(404).render('404', { title: '404 - Página no encontrada' });
})


const atlas = false;

const startServer = async () => {
    if (!atlas) {
        await connectToMongoDB();
    } else {
        await connectToMongoDBAtlas();
    }
    app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`))
}

startServer();