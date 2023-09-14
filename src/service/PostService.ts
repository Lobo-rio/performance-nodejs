import { Post } from '../entities/PostEntity'
import { postRepository } from '../repositories/PostRepository'

interface PostResponse {
  posts: Post[]
}

export class PostService {
  async handle(title: string, page: number, perPage: number): Promise<PostResponse> {
    const posts = await postRepository.find({
      where: { title },
      skip: ((page - 1) * perPage),
      take: perPage,
    })

    return {
      posts,
    }
  }
}
