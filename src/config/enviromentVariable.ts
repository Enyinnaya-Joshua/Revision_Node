import dotenv from "dotenv";

dotenv.config();

const enviromentVariable = {
  PORT: process.env.PORT as string,
  MONGODB_LOCAL_STRING: process.env.MONGODB_LOCAL_STRING as string,
};

export default enviromentVariable;
