import { AppDataSource } from '../database/data-source'
import { User } from '../entities/UserEntity'

export const userRepository = AppDataSource.getRepository(User)
