import { User } from '../entities/UserEntity'
import { userRepository } from '../repositories/UserRepository'
interface UserRequest {
  name: string
  page: number
  perPage: number
}

interface UserResponse {
  users: User[]
}

export class UserService {
  async handle(data: UserRequest): Promise<UserResponse> {
    const { name, page, perPage } = data
    const users = await userRepository.find({
      where: { name },
      skip: ((page - 1) * perPage),
      take: perPage,
    })
    return {
      users,
    }
  }
}
