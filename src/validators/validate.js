import { validationResult } from "express-validator";
import { ApiError } from "../helpers/ApiError.js";
export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  console.log(req);
  errors.array().map((err) => {
    console.log(err);

    extractedErrors.push({ [err.path]: err.msg });
  });

  // 422: Unprocessable Entity
  throw new ApiError(422, "Received data is not valid", extractedErrors);
};
