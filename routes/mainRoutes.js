import express from "express";
import {
  getCurrentTime,
  getTimeFromInput,
} from "../controllers/mainControllers.js";

const router = express.Router();

router.route("/").get(getCurrentTime);
router.route("/:input").get(getTimeFromInput);

export default router;
