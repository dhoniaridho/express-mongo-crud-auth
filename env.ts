import dotenv from 'dotenv';

dotenv.config();

const env = {
    APP_NAME: process.env.APP_NAME,
    APP_PORT: parseInt(process.env.APP_PORT ?? '3000'),
    APP_SECRET: process.env.APP_SECRET,
    MONGO_URI: process.env.MONGO_URI ?? 'mongodb://127.0.0.1:27017/',
    DB_NAME: process.env.DB_NAME ?? '',
}

export default env