import mongoose from "mongoose";
import enviromentVariable from "./enviromentVariable";

const db = enviromentVariable.MONGODB_LOCAL_STRING;

const dbConfig = async () => {
  try {
    const conn = await mongoose.connect(db);
    console.log(`database is connected @: ${mongoose.connection.host}`);
  } catch (error) {
    console.log("an error occured when connecting to the database", error);
  }
};

export default dbConfig;
