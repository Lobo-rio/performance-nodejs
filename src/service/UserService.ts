import { Like } from 'typeorm'

import { User } from '../entities/UserEntity'
import { userRepository } from '../repositories/UserRepository'

interface UserResponse {
  users: User[]
}

export class UserService {
  async handle(name: string, page: number, perPage: number): Promise<UserResponse> {
    const users = await userRepository.find({
      where: { name: Like(`%${name}%`) },
      skip: ((page - 1) * perPage),
      take: perPage,
    })
    return {
      users,
    }
  }
}

