import 'dotenv/config'
import 'reflect-metadata'
import { DataSource, DataSourceOptions } from 'typeorm'
import { SeederOptions } from 'typeorm-extension'

import { MainSeeder } from './seeds/MainSeeder'
import { env } from '../env'
import { User } from '../entities/UserEntity'
import { Post } from '../entities/PostEntity'
import { CreateTableUsers1694626207146 } from '../migrations/1694626207146-CreateTableUser'
import { CreateTableUsers1694626312083 } from '../migrations/1694626312083-CreateTablePost'

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: env.POSTGRES_HOST,
  port: env.POSTGRES_PORT,
  username: env.POSTGRES_USERNAME,
  password: env.POSTGRES_PASSWORD,
  database: env.POSTGRES_DATABASE,
  entities: [ User, Post],
  migrations: [ CreateTableUsers1694626207146, CreateTableUsers1694626312083 ],
  seeds: [MainSeeder],
}

export const AppDataSource = new DataSource(options)
