import express from "express";

import { getBusiness } from "../controllers/business.js";

const router = express.Router();

router.get("/get", getBusiness);

export default router;
