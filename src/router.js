import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
    const user = await User.create({
        name: 'Matheus',
        email:'matheus@email.com',
        password_hash: '123565'
    });
    return res.json(user);
})

//Exportanto para consumir
export default routes;