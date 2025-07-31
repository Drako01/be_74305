import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectToMongoDB, connectToMongoDBAtlas } from './config/db/connect.config.js';
import logger from './middleware/logger.js'

import homeRouter from './routes/home.router.js';
import studentsRouter from './routes/students.router.js';
import coursesRouter from './routes/courses.router.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
app.use(logger); 
const httpServer = createServer(app)
const io = new Server(httpServer)

app.use(express.json());

const PORT = 3000;

/** 1) Motor de Plantillas */
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

/** 2) Carpeta de archivos static y llamados a bootstrap y sweetalert*/
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use('/sweetalert2', express.static(path.join(__dirname, 'node_modules/sweetalert2/dist')));

/** 3) Routers */
app.use('/', homeRouter);
// Rutas API
app.use('/api/students', studentsRouter);
app.use('/api/courses', coursesRouter);

/** 4) Seteo de Error 404 */
app.use((req, res) => {
    res.status(404).render('404', { title: '404 - Página no encontrada' });
})

/** 5) Creacion del WebSocket */
io.on('connection', (socket) => {
    console.log('🟢 Nuevo Usuario conectado.!')

    socket.on('chat:message', (data) => {
        io.emit('chat:message', data);
    });

    socket.on('disconnect', () => {
        console.log('🔴 Usuario desconectado.!')
    });
})


const altas = true;

const startServer = async () => {
    if (!altas) {
        await connectToMongoDB();
    } else {
        await connectToMongoDBAtlas();
    }
    httpServer.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`))
}

startServer();