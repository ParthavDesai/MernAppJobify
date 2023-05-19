import express from "express";
const router = express.Router();
import { register, login, updateUser } from "../controllers/authController.js";
import authenticateUser from "../middleware/auth.js";
import rateLimiter from "express-rate-limit";

const appLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message:
    "Too many requests from this ip address, please try again in 15 minutes",
});

router.route("/register").post(appLimiter, register);
router.route("/login").post(appLimiter, login);
router.route("/updateUser").patch(authenticateUser, updateUser);

export default router;
