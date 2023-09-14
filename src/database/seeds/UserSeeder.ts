import { DataSource } from 'typeorm'
import { Seeder, SeederFactoryManager } from 'typeorm-extension'
import { faker } from '@faker-js/faker'
import bcrypt from 'bcrypt'

import { User } from '../../entities/UserEntity'

export class UserSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    const userRepository = dataSource.getRepository(User)

    for (let i = 1; i < 38; i++) {
      const userData = await this.createDataUser()
  
      const userExists = await userRepository.findOneBy({ email: userData.email })
  
      if (!userExists) {
        const newUser = userRepository.create(userData)
        await userRepository.save(newUser)
      }
    }
  }
  private async createDataUser() {
    return {
      name: faker.person.fullName(),
      email: faker.internet.email(), 
      password: await bcrypt.hash(faker.person.zodiacSign(), 8),
      isActive: true,
      isAdmin: true,
    }
  }
}
