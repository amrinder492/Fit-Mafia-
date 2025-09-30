import dotenv from 'dotenv';

dotenv.config();

export const MONGODB_URL = process.env.MONGODB_URL  
export const DB_NAME = process.env.DB_NAME
export const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET
export const EMAIL_USER = process.env.EMAIL_USER
export const EMAIL_PASS = process.env.EMAIL_PASS
export const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY