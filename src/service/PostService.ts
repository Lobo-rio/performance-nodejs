import { Post } from '../entities/PostEntity'

interface PostRequest {
  title: string
  page: number
  perPage: number
}

interface PostResponse {
  posts: Post[]
}

export class PostService {
  async handle(data: PostRequest): Promise<PostResponse> {
    return {
      posts: [],
    }
  }
}
