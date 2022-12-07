import { Router } from "express";

const router = Router();

router.get('/favicon.ico', (_req, res) => {
    res.sendStatus(204);
});

router.get('/', (_req, res) => {
    res.status(200)
    res.send(`
    <h3>Hello and welcome!</h3>
    <p>Please, use our API <a href="http://localhost:8000/api">Click here!</a></p>
    `)
});

export default router;