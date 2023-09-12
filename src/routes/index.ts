import { Router } from 'express'
import { UserController } from '../controller/UserController'
import { PostController } from '../controller/PostController'

export const routes = Router()
const userController = new UserController() 
const postController = new PostController() 

routes.get('/users', userController.handle)
routes.get('/posts', postController.handle)