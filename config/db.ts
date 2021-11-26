import mongoose from "mongoose";
import env from "../env";

export default class DB {
  static async start() {
    try {
      await mongoose.connect(env.MONGO_URI + env.DB_NAME);
    } catch (error) {
      console.log(error);
    }
  }
}
