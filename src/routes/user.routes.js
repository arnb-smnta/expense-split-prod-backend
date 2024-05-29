import { Router } from "express";
import {
  userLoginValidator,
  userRegisterValidator,
} from "../validators/users.validator.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { validate } from "../validators/validate.js";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/user.controller.js";
const router = Router();
router.route("/register").post(userRegisterValidator(), validate, registerUser);
router.route("/login").post(userLoginValidator(), validate, loginUser);
router.route("/logout").post(verifyJWT, logoutUser);
export default router;
