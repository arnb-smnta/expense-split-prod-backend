import { Router } from "express";
import {
  userLoginValidator,
  userRegisterValidator,
} from "../validators/users.validator.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { validate } from "../validators/validate.js";
import {
  changePassword,
  getCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
  updateUserDetails,
} from "../controllers/user.controller.js";
import { searchAvailableUsers } from "../controllers/expensegroup.controller.js";
const router = Router();
router.route("/register").post(userRegisterValidator(), validate, registerUser);
router.route("/login").post(userLoginValidator(), validate, loginUser);
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/availableusers").get(verifyJWT, searchAvailableUsers);
router.route("/changepassword").post(verifyJWT, changePassword);
router.route("/getcurrentuser").get(verifyJWT, getCurrentUser);
router.route("/changeuserdetails").post(verifyJWT, updateUserDetails);

export default router;
