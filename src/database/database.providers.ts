import * as mongoose from 'mongoose'
import { MongoDB } from 'src/environments/environment'

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect(MongoDB.DB_URI)
    }
]