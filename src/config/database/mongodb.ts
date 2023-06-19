import mongoose from "mongoose";
import "dotenv/config";
class mongoDbClient {
  async connect(): Promise<void> {
    try {
      await mongoose.connect(process.env.MONGODB_URL || "");
      console.log("connect success!");
    } catch (error) {
      console.log("connect fail!");
    }
  }
}

export default new mongoDbClient();
