import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { validate } from "../validators/validate.js";
import { addAnExpenseValidator } from "../validators/expense.validator.js";

import { upload } from "../middleware/multer.middleware.js";
import { mongoIdPathVariableValidator } from "../validators/mongodb.validators.js";
import {
  addExpense,
  deleteExpense,
  editExpense,
  groupCategoryExpense,
  groupDailyExpense,
  groupMonthlyExpense,
  recentUserExpense,
  userCategoryExpense,
  userDailyExpense,
  userMonthlyExpense,
  viewExpense,
  viewGroupExpense,
  viewUserExpense,
} from "../controllers/expense.controller.js";
const router = Router();

router.use(verifyJWT);

router
  .route("/addexpense/:groupId")
  .post(
    upload.fields([{ name: "billAttachments", maxCount: 5 }]),
    addAnExpenseValidator(),
    mongoIdPathVariableValidator("groupId"),
    validate,
    addExpense
  );

router
  .route("/:expenseId")

  .get(mongoIdPathVariableValidator("expenseId"), validate, viewExpense)

  .patch(mongoIdPathVariableValidator("expenseId"), validate, editExpense)

  .delete(mongoIdPathVariableValidator("expenseId"), validate, deleteExpense);

router
  .route("/group/:groupId")

  .get(mongoIdPathVariableValidator("groupId"), validate, viewGroupExpense);

router.route("/user/expense").get(viewUserExpense);

router.route("/user/recentexpense").get(recentUserExpense);

router.route("/monthlyexpense/user").get(userMonthlyExpense);

router.route("/categoryexpense/user").get(userCategoryExpense);

router.route("/dailyexpense/user").get(userDailyExpense);

router
  .route("/monthlyexpense/group/:groupId")
  .get(mongoIdPathVariableValidator("groupId"), validate, groupMonthlyExpense);

router
  .route("/dailyexpense/group/:groupId")
  .get(mongoIdPathVariableValidator("groupId"), validate, groupDailyExpense);

router
  .route("/categoryexpense/group/:groupId")
  .get(mongoIdPathVariableValidator("groupId"), validate, groupCategoryExpense);

export default router;
