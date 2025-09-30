import { DB_NAME, MONGODB_URL } from "@/lib/constants"
import mongoose from "mongoose"

/* eslint-disable no-var */
declare global {
    var mongoose: {
      conn: mongoose.Connection | null;
      promise: Promise<mongoose.Connection> | null;
    } | undefined;
  }
  /* eslint-enable no-var */

  
let cached = global.mongoose

if(!cached) {
    cached = global.mongoose = { conn: null, promise: null }
};

export const db = async () => {
    try {
        if (cached.conn) {
            console.log("MongoDB already connected")
            return cached.conn;
        };
        if (!cached.promise) {
            cached.promise = mongoose.connect(`${MONGODB_URL}/${DB_NAME}`).then((m)=> m.connection)
        } 
        cached.conn = await cached.promise
        console.log("MongoDB connected")
        return cached.conn;
    } catch (error) {
        console.log('DB is not connected', error);
    };
};