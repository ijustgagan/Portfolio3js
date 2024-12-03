import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./config/config.env" });

const Mongo_Url = process.env.MONGO_URL;

export const connectDatabase = () => {
  mongoose.connect(Mongo_Url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((c) => {
      console.log(`MongoDB connected to: ${c.connection.host}`);
    })
    .catch((e) => {
      console.log(e);
    });
};
