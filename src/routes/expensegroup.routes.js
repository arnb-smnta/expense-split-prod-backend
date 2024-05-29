import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { validate } from "../validators/validate.js";
import { mongoIdPathVariableValidator } from "../validators/mongodb.validators.js";
import {
  editExpenseGroup,
  createExpenseGroup,
  deleteExpenseGroup,
  getUserExpenseGroups,
  groupBalaceSheet,
  makeSettlement,
  viewExpenseGroup,
  userSettlementRecords,
  groupSettlementRecords,
  addMembersInExpenseGroup,
  searchAvailableUsers,
} from "../controllers/expensegroup.controller.js";
import { createAExpenseGroupValidator } from "../validators/expensegroup.validator.js";
const router = Router();
router.use(verifyJWT);
router.route("/availableUsers").get(searchAvailableUsers);
router
  .route("/creategroup")
  .post(createAExpenseGroupValidator(), validate, createExpenseGroup);

router
  .route("/:groupId")

  .get(mongoIdPathVariableValidator("groupId"), validate, viewExpenseGroup)

  .patch(mongoIdPathVariableValidator("groupId"), validate, editExpenseGroup)

  .delete(
    mongoIdPathVariableValidator("groupId"),
    validate,
    deleteExpenseGroup
  );

router
  .route("/group-settlements/:groupId")
  .post(mongoIdPathVariableValidator("groupId"), validate, groupBalaceSheet);

router
  .route("/makesettlement/:groupId")
  .post(mongoIdPathVariableValidator("groupId"), validate, makeSettlement);

router.route("/").get(getUserExpenseGroups);

router.route("/settlements/user").get(userSettlementRecords);

router.route("/settlements/group/:groupId").get(groupSettlementRecords);

router
  .route("/group/:groupId/:userId")
  .post(
    mongoIdPathVariableValidator("groupId"),
    mongoIdPathVariableValidator("userId"),
    validate,
    addMembersInExpenseGroup
  );
export default router;
