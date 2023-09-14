import { DataSource } from 'typeorm'
import { Seeder, SeederFactoryManager } from 'typeorm-extension'
import { faker } from '@faker-js/faker'
import { randomUUID } from 'node:crypto'

import { Post } from '../../entities/PostEntity'

export class PostSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    const postRepository = dataSource.getRepository(Post)

    for (let i = 1; i < 29990; i++) {
      const postData = await this.createDataPost()

      const newPost = postRepository.create(postData)
       await postRepository.save(newPost)
    }
  }

  private async createDataPost() {
    return {
      title: `${faker.finance.accountName()} <-> ${randomUUID()}`,
      description: faker.lorem.sentence(),
      city: faker.location.city(),
      author: faker.person.middleName(),
      isActive: true,
    }
  }
}
