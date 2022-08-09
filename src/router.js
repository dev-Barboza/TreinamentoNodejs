import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) =>{
    return res.json({message: "Okay"})
})

//Exportanto para consumir
export default routes;