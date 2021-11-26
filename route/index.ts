import express from 'express';
import AuthController from '../app/controllers/auth.controlller';
import PostController from '../app/controllers/post.controller';
import AuthMiddleware from '../app/middleware/auth';

const Route = express.Router()

Route.get('/posts', AuthMiddleware, PostController.index)
Route.post('/posts/create', AuthMiddleware, PostController.create)
Route.get('/posts/:id', AuthMiddleware, PostController.show)
Route.patch('/posts/:id', AuthMiddleware, PostController.update)
Route.delete('/posts/:id', AuthMiddleware, PostController.delete)

// Auth

Route.post('/register', AuthController.register)
Route.post('/login', AuthController.login)

export default Route