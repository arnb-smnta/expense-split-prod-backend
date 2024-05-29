export const DB_NAME = "Prod-Expense-Split-App";

export const getStaticFilePath = (req, fileName) => {
  return `${req.protocol}://${req.get("host")}/images/${fileName}`;
};

export const getLocalPath = (fileName) => {
  return `public/images/${fileName}`;
};

export const removeLocalFile = (localPath) => {
  fs.unlink(localPath, (err) => {
    if (err) console.log("Error while removing local files: ", err);
    else {
      console.log("Removed local: ", localPath);
    }
  });
};

export const removeUnusedMulterImageFilesOnError = (req) => {
  try {
    const multerFile = req.file;
    const multerFiles = req.files;

    if (multerFile) {
      // If there is file uploaded and there is validation error
      // We want to remove that file
      removeLocalFile(multerFile.path);
    }

    if (multerFiles) {
      /** @type {Express.Multer.File[][]}  */
      const filesValueArray = Object.values(multerFiles);
      // If there are multiple files uploaded for more than one fields
      // We want to remove those files as well
      filesValueArray.map((fileFields) => {
        fileFields.map((fileObject) => {
          removeLocalFile(fileObject.path);
        });
      });
    }
  } catch (error) {
    // fail silently
    console.log("Error while removing image files: ", error);
  }
};

/**
 * @type {{FOOD_AND_DRINK: "Food & drink",SHOPPING: "shopping",ENTERTAINMENT: "entertainment",HOME: "Home",TRANSPORTATION: "Transportation",OTHERS: "Others",  } as const}
 */
export const ExpenseTypes = {
  FOOD_AND_DRINK: "Food & drink",
  SHOPPING: "shopping",
  ENTERTAINMENT: "entertainment",
  HOME: "Home",
  TRANSPORTATION: "Transportation",
  OTHERS: "Others",
};

export const AvailableExpenseTypes = Object.values(ExpenseTypes);

/**
 *  @type {{HOME: "Home", TRIP: "Trip",OFFICE: "Office",SPORTS: "Sports",OTHERS: "Others",} as const}
 */

export const ExpenseGroupTypes = {
  HOME: "Home",
  TRIP: "Trip",
  OFFICE: "Office",
  SPORTS: "Sports",
  OTHERS: "Others",
};

export const AvailableExpenseGroupTypes = Object.values(ExpenseGroupTypes);

/**
 *  @type {{CASH: "Cash", UPI: "Upi",CARD: "Card"} as const}
 */

export const PaymentMethods = {
  CASH: "Cash",
  UPI: "Upi",
  CARD: "Card",
};

export const AvailablePaymentMethods = Object.values(PaymentMethods);
export const UserLoginType = {
  GOOGLE: "GOOGLE",
  GITHUB: "GITHUB",
  EMAIL_PASSWORD: "EMAIL_PASSWORD",
};
export const AvailableSocialLogins = Object.values(UserLoginType);
/**
 * @type {{ ADMIN: "ADMIN"; USER: "USER"} as const}
 */
export const UserRolesEnum = {
  ADMIN: "ADMIN",
  USER: "USER",
};

export const AvailableUserRoles = Object.values(UserRolesEnum);
