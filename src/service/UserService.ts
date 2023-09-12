import { User } from "../entities/UserEntity"

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

        return {
            users: []
        }
    }
}