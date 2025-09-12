import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

//Middleware for handling CORS
//app.use(cors());
app.use(cors({ origin: "http://localhost:3000" }));

//Books
app.use("/books", booksRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
