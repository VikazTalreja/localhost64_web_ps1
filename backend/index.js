import express from "express";
import cors from "cors";

import { connectDB } from "./database/dbConnect.js";
import userRouter from "./routes/auth.js";

const app = express();

const PORT = 8000;

app.set(PORT);

app.use(cors());
connectDB();

app.listen(PORT, () => {
  console.log(`runing on port ${PORT}`);
});

app.use("/auth", userRouter);
