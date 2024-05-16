import mongoose from "mongoose";

interface Options {
  //5
  mongoUrl: string;
  dbName: string;
}

export class MongoDatabase {
  //1

  static async connect(options: Options) {
    // 2  // 6 options: Options

    const { dbName, mongoUrl } = options; // 7

    try {
      // 3

      await mongoose.connect(mongoUrl, {
        // 4
        dbName: dbName,
      });

      //9
      console.log("Mongo connected");
      return true;
    } catch (error) {
      //8
      console.log("Mongo connection error");
      throw error;
    }
  }
}