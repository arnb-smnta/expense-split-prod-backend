<h1>This is a hosted backend of expense Split app for web developers to use in their frontend projects</h1>
<h1>server.splitbills.site</h1>

### Expense Routes

| Method | Route                                     |
|--------|-------------------------------------------|
| POST   | `/addexpense/:groupId`                    |
| GET    | `/:expenseId`                             |
| PATCH  | `/:expenseId`                             |
| DELETE | `/:expenseId`                             |
| GET    | `/group/:groupId`                         |
| GET    | `/user/expense`                           |
| GET    | `/user/recentexpense`                     |
| GET    | `/monthlyexpense/user`                    |
| GET    | `/categoryexpense/user`                   |
| GET    | `/dailyexpense/user`                      |
| GET    | `/monthlyexpense/group/:groupId`          |
| GET    | `/dailyexpense/group/:groupId`            |
| GET    | `/categoryexpense/group/:groupId`         |

### Expense Group Routes

| Method | Route                                     |
|--------|-------------------------------------------|
| GET    | `/availableUsers`                         |
| POST   | `/creategroup`                            |
| GET    | `/:groupId`                               |
| PATCH  | `/:groupId`                               |
| DELETE | `/:groupId`                               |
| POST   | `/group-settlements/:groupId`             |
| POST   | `/makesettlement/:groupId`                |
| GET    | `/`                                       |
| GET    | `/settlements/user`                       |
| GET    | `/settlements/group/:groupId`             |
| POST   | `/group/:groupId/:userId`                 |

### User Routes

| Method | Route                                     |
|--------|-------------------------------------------|
| POST   | `/register`                               |
| POST   | `/login`                                  |
| POST   | `/logout`                                 |
| GET    | `/availableusers`                         |
| POST   | `/changepassword`                         |
| GET    | `/getcurrentuser`                         |
| POST   | `/changeuserdetails`                      |
