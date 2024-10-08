import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});
