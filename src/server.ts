import { app } from "./app"
import { env } from "./env"
import { AppDataSource } from './database/data-source'


AppDataSource.initialize().then(() => {
	app.listen(env.PORT, () => {
        console.log(`HTTP server running in port ${env.PORT}!`)
    })
})