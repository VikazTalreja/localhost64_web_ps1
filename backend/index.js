import express from "express";
import cors from "cors";

import { connectDB } from "./database/dbConnect.js";
import userRouter from "./routes/auth.js";
import businessGet from "./routes/businessGet.js";
import businessPost from "./routes/businessPost.js";
import reviewPost from "./routes/reviewPost.js";

const app = express();
const PORT = 8080;

app.set(PORT);
app.use(cors());
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", userRouter);
app.use("/businessinfo", businessGet);
app.use("/business", businessPost);
app.use("/review", reviewPost);

app.listen(PORT, () => {
  console.log(`runing on port ${PORT}`);
});
