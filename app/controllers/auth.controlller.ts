import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user';
import bcrypt from 'bcryptjs';

export default class AuthController {
    static async login(req: Request, res: Response) {
        const { username, password } = req.body

        const user = await User.findOne({
            username: username
        }).select('+password')      
        
        let authenticated = await bcrypt.compare(password, user.password)

        if(!authenticated || !user) return res.status(401).json('Invalid Credentials')

        const token = jwt.sign({ username, password }, 'ae7c2c6d1872b24e66031016f00eca53ae5b70f8b44ac1e190e1a538f7c74e1d92e7767a17c5608058b634b0149eb0bf6efc903fc232cd66964953c5fc392b6b', {
            expiresIn: "2h",
          })
        res.json({
            token,
            user: {
                name: user.name,
                username: user.username
            },
            message: 'Authenticated'
        });
    }
    static async register(req: Request, res: Response) {

        const  { name, username, password } = req.body

        const encyrpt = await bcrypt.hash(password , 10);
        await User.create({
            name,
            username,
            password: encyrpt
        })
        return res.send('registered')
    }
}