import 'dotenv/config'
import 'reflect-metadata'
import { DataSource, DataSourceOptions } from 'typeorm'
import { SeederOptions } from 'typeorm-extension'
import { MainSeeder } from './seeds/MainSeeder'

const port = process.env.POSTGRES_PORT as number | undefined

const options: DataSourceOptions & SeederOptions = {
	type: 'postgres',
	host: process.env.POSTGRES_HOST,
	port: port,
	username: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASS,
	database: process.env.POSTGRES_NAME,
	entities: [`${__dirname}/**/entities/*.{ts,js}`],
	migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
	seeds: [MainSeeder],
}

export const AppDataSource = new DataSource(options)