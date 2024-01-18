import express from "express";
import cors from "cors";

const app = express();

const PORT = 8000;

app.use(cors);

app.listen(PORT, () => {
  console.log(`runing on port ${PORT}`);
});

app.get("/", () => {
  console.log("running successfully");
});
