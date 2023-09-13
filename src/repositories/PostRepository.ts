import { AppDataSource } from '../database/data-source'
import { Post } from '../entities/PostEntity'

export const postRepository = AppDataSource.getRepository(Post)
