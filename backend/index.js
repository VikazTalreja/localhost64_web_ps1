import express from "express";
import cors from "cors";

import { connectDB } from "./database/dbConnect.js";
import userRouter from "./routes/auth.js";
import businessPost from "./routes/businessPost.js";

const app = express();
const PORT = 8080;

app.set(PORT);
app.use(cors());
connectDB();

app.use(express.json());

app.use("/auth", userRouter);
app.use("/business", businessPost);

app.listen(PORT, () => {
  console.log(`runing on port ${PORT}`);
});
