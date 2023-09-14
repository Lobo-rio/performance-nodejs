import { Router } from 'express'
import { UserController } from '../controller/UserController'
import { PostController } from '../controller/PostController'

export const routes = Router()
const userController = new UserController()
const postController = new PostController()

routes.get('/users/:name/:page/:perPage', userController.handle)
routes.get('/posts/:title/:page/:perPage', postController.handle)
