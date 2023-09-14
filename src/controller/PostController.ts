import { Request, Response } from 'express'
import { UserService } from '../service/UserService'

export class PostController {
  async handle(request: Request, response: Response) {
    const { title, page, perPage } = request.params
    const userService = new UserService()
    const users = await userService.handle( 
      title, 
      page, 
      perPage 
    )

  }
}
