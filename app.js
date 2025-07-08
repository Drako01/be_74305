import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';

import homeRouter from './routes/home.router.js';
import uploadRouter from './routes/upload.router.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const PORT = 3000;

/** 1) Motor de Plantillas */
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

/** 2) Carpeta de archivos static */
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

/** 3) Routers */
app.use('/', homeRouter);
app.use('/upload', uploadRouter);

/** 4) Seteo de Error 404 */
app.use((req,res) => {
    res.status(404).render('404', {title: '404 - Página no encontrada'});
})

app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`))
