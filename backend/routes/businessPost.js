import express from "express";

import { businessHandle } from "../controllers/business.js";

const router = express.Router();

router.post("/entry", businessHandle);

export default router;
