import { Router } from "express";
const router = Router();


router.get('/', (req, res) => {
    res.render('home', {title : 'Inicio'});
});

export default router;