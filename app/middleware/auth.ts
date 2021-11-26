import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

async function AuthMiddleware(req: Request, res: Response, next: NextFunction) {
    const token: any = req.headers["x-access-token"]?.toString() ?? undefined
    if(!token) return res.status(401).json('A token is required for authentication')
    try {
        const decoded = jwt.verify(token, 'ae7c2c6d1872b24e66031016f00eca53ae5b70f8b44ac1e190e1a538f7c74e1d92e7767a17c5608058b634b0149eb0bf6efc903fc232cd66964953c5fc392b6b')
        return next();
    } catch (error: any) {
        return res.status(401).json(error.message)
    }
}   


export default AuthMiddleware;