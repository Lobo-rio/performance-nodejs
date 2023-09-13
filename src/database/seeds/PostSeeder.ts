import { DataSource } from 'typeorm'
import { Seeder, SeederFactoryManager } from 'typeorm-extension'
import { faker } from '@faker-js/faker'

import { Post } from '../../entities/PostEntity'

export class PostSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    const postRepository = dataSource.getRepository(Post)

    for (let i = 1; i < 100000; i++) {
      const postData = await this.createDataPost()

      const newPost = postRepository.create(postData)
      await postRepository.save(newPost)
    }
  }

  private async createDataPost() {
    return {
      title: faker.finance.accountName(),
      description: faker.lorem.sentence(),
      city: faker.location.city(),
      author: faker.person.middleName(),
      isActive: true,
    }
  }
}
