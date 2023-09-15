import dotenv from 'dotenv'
import { cpus } from 'os'
import cluster from 'cluster'

dotenv.config()

import { app } from './app'
import { env } from './env'
import { AppDataSource } from './database/data-source'

AppDataSource.initialize().then(() => {
  console.log('Banco em pé!!!')
})

if (cluster.isPrimary) {
  const numWorkers = cpus().length
  console.log(`Master cluster setting up ${numWorkers} workers...`)

  for (let i = 0; i < numWorkers; i++) {
    cluster.fork()
  }

  cluster.on('online', (worker) => {
    console.log(`Worker ${worker.process.pid} is online`)
  })

  cluster.on('exit', (worker, code, signal) => {
    console.log(
      `Worker ${worker.process.pid} died with code ${code} and signal ${signal}`
    )
    console.log('Starting a new worker')
    cluster.fork()
  })
} else {
    let server = app.listen(env.PORT, () => {
      console.log(`Worker ${process.pid} listening on port ${env.PORT}!`)
    })
  
    const events = ['exit', 'SIGINT', 'SIGUSR1', 'SIGUSR2', 'SIGTERM']

    events.forEach((e) => {
        process.on(e, async () => {
            server.close()
            AppDataSource.destroy()
        })
    })
}