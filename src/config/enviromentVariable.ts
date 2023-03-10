import dotenv from "dotenv";

dotenv.config();

const enviromentVariable = {
  PORT: process.env.PORT as string,
  LOCAL_HOST: process.env.MONGODB_STRING_LOCAL as string,
};

export default enviromentVariable;
