import mongoose from "mongoose";
import enviromentVariable from "./enviromentVariable";

const db = enviromentVariable.LOCAL_HOST;

const dbConfig = async () => {
  try {
    const conn = await mongoose.connect(db);
    console.log(`db connection @: ${conn.connection.host}`);
  } catch (error) {
    console.log("an error occured when connecting to the database", error);
  }
};

export default dbConfig;
