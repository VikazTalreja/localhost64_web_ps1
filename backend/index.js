import express from "express";
import cors from "cors";

import { connectDB } from "./database/dbConnect.js";

const app = express();

const PORT = 8000;

app.use(cors);
connectDB();

app.listen(PORT, () => {
  console.log(`runing on port ${PORT}`);
});

app.get("/", () => {
  console.log("running successfully");
});
