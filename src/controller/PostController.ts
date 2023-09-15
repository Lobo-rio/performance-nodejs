import { Request, Response } from 'express'
import { PostService } from '../service/PostService'

export class PostController {
  async handle(request: Request, response: Response) {
    const { title, page, perPage } = request.params
    const postService = new PostService()
    const posts = await postService.handle( 
      title, 
      +page, 
      +perPage 
    )
    
    return response.status(200).send(posts)
  }
}
