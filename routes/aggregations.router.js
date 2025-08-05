import { Router } from "express";
import { aggregateCourses } from '../controller/aggregation.controller.js';

const router = Router();


router.get('/cursos/resumen', aggregateCourses);


export default router;