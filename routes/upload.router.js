import { Router } from "express";
import multer from "multer";
import path from 'path';
import { fileURLToPath } from "url";

const router = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../uploads'),
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

router.get('/', (req, res) => {
    res.render('upload', {title : 'Subir Archivo'});
});

router.post('/', upload.single('miArchivo'), (req, res) => {
    const file = req.file;
    
    res.render('upload', {
        title: 'Subir Archivo',
        msg: `Archivo ${req.file.originalname} subido con éxito.!`,
        fileUrl: `/uploads/${file.filename}`,
        isImage: file.mimetype.startsWith('image/')
    });
});

export default router;