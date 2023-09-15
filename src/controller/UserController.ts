import { Request, Response } from 'express'
import { UserService } from '../service/UserService'

export class UserController {
  async handle(request: Request, response: Response) {
    const { name, page, perPage } = request.params
    const userService = new UserService()
    const users = await userService.handle(
      name, 
      +page, 
      +perPage 
    )
    
    return response.status(200).send(users)
  }
}
