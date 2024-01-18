import express from "express";
import { postReview } from "../controllers/reviews.js";

const router = express.Router();

router.post("/post", postReview);

export default router;
