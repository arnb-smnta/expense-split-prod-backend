

# 💼 **Expense Split Backend API**  
This is a fully hosted backend for the **Expense Split** application, designed for web developers to seamlessly integrate into their frontend projects.  

### 🌐 **Hosted URL**  
[**https://server.splitbills.site**](https://server.splitbills.site)  

---

## 🚀 **Expense Routes**  
**Base URL**: `https://server.splitbills.site/api/v1/expense` (Protected Routes - Requires JWT Authentication)  

| **Method** | **Route**                                 | **Description**                                          |
|------------|-------------------------------------------|----------------------------------------------------------|
| `POST`     | `/addexpense/:groupId`                   | Add an expense to a specific group.                     |
| `GET`      | `/:expenseId`                            | Retrieve details of a specific expense.                 |
| `PATCH`    | `/:expenseId`                            | Edit details of an expense.                             |
| `DELETE`   | `/:expenseId`                            | Delete an expense.                                      |
| `GET`      | `/group/:groupId`                        | View all expenses of a group.                           |
| `GET`      | `/user/expense`                          | Retrieve all expenses of a user.                        |
| `GET`      | `/user/recentexpense`                    | Retrieve the 5 most recent group expenses.              |
| `GET`      | `/monthlyexpense/user`                   | Retrieve user expenses grouped by month.                |
| `GET`      | `/categoryexpense/user`                  | Retrieve user expenses grouped by category.             |
| `GET`      | `/dailyexpense/user`                     | Retrieve user expenses grouped daily.                   |
| `GET`      | `/monthlyexpense/group/:groupId`         | Retrieve group expenses grouped by month.               |
| `GET`      | `/dailyexpense/group/:groupId`           | Retrieve group expenses grouped daily.                  |
| `GET`      | `/categoryexpense/group/:groupId`        | Retrieve group expenses grouped by category.            |

---

## 🧾 **Expense Group Routes**  
**Base URL**: `https://server.splitbills.site/api/v1/expensegroup` (Protected Routes - Requires JWT Authentication)  

| **Method** | **Route**                                 | **Description**                                          |
|------------|-------------------------------------------|----------------------------------------------------------|
| `GET`      | `/availableUsers`                        | Get a list of all available users in the database.      |
| `POST`     | `/creategroup`                           | Create a new expense group.                             |
| `GET`      | `/:groupId`                              | Retrieve details of a specific group.                   |
| `PATCH`    | `/:groupId`                              | Edit group details (name and description only).         |
| `DELETE`   | `/:groupId`                              | Delete a group.                                         |
| `POST`     | `/group-settlements/:groupId`            | Get group balance sheet (simplified who-owes-whom).     |
| `POST`     | `/makesettlement/:groupId`               | Settle balances in the group based on provided data.    |
| `GET`      | `/`                                      | List all groups the user is a part of.                  |
| `GET`      | `/settlements/user`                      | Get all settlements initiated by the user.              |
| `GET`      | `/settlements/group/:groupId`            | Get all settlements in a group.                         |
| `POST`     | `/group/:groupId/:userId`                | Add a member to an expense group.                       |

---

## 👤 **User Routes**  
**Base URL**: `https://server.splitbills.site/api/v1/users`  

| **Method** | **Route**                                 | **Description**                                          |
|------------|-------------------------------------------|----------------------------------------------------------|
| `POST`     | `/register`                              | Register a new user.                                    |
| `POST`     | `/login`                                 | Log in a user and obtain a JWT access token.            |
| `POST`     | `/logout`                                | Log out the currently authenticated user.               |
| `GET`      | `/availableusers`                        | Get a list of all available users (Protected).          |
| `POST`     | `/changepassword`                        | Change the password of the logged-in user (Protected).  |
| `GET`      | `/getcurrentuser`                        | Retrieve details of the current logged-in user (Protected). |
| `POST`     | `/changeuserdetails`                     | Update details of the logged-in user (Protected).       |

---

## 🔒 **Protected Routes**  
All routes marked as **Protected** require the user to be authenticated.  
- On successful login, a **JWT access token** will be issued.  
- Pass the token in the request header for protected routes.  
- Unauthorized access attempts will return a **401 - Unauthorized** error.  

### **Example of Authorization Header**  
```http
Authorization: Bearer <your_access_token>
```

---

### 💡 **How It Works**  
This API simplifies expense tracking for groups and individuals by providing endpoints to:  
- Add, edit, and view expenses (daily, monthly, or by category).  
- Manage user groups and settlements.  
- View user balances and expense histories.  

---

### 🌟 **Built For Developers**  
This backend is tailored for developers who want to integrate expense management features into their frontend projects quickly and efficiently.  

🔗 **Use the Hosted URL** and start building!  

---  

📚 **Happy Coding!** 🚀  
