<h1>This is a hosted backend of expense Split app for web developers to use in their frontend projects</h1>
<h1>server.splitbills.site</h1>

### Expense Routes
## Route Url- server.splitbills.site/api/v1/expense {protected routes}

| Method | Route                                     |
|--------|-------------------------------------------|
| POST   | `/addexpense/:groupId`  Adds expense in a group                  |
| GET    | `/:expenseId`  Get details of Expense
| PATCH  | `/:expenseId`  Edit expense details       |
| DELETE | `/:expenseId`  Delete expense                           |
| GET    | `/group/:groupId`     Views all expense of the group                    |
| GET    | `/user/expense`       Views all the expense of the user                    |
| GET    | `/user/recentexpense`  Gets recent 5 expenses of the group                   |
| GET    | `/monthlyexpense/user`  Gets users expenses month wise                  |
| GET    | `/categoryexpense/user`  Gets users expense category wise                 |
| GET    | `/dailyexpense/user`     Gets users expense daily wise                 |
| GET    | `/monthlyexpense/group/:groupId` Gets users expense monthly wise         |
| GET    | `/dailyexpense/group/:groupId`   Gets expense in a group daily wise         |
| GET    | `/categoryexpense/group/:groupId` Gets expenses of a group category wise         |

### Expense Group Routes
## Route Url-server.splitbills.site/api/v1/expensegroup {protected routes}
| Method | Route                                     |
|--------|-------------------------------------------|
| GET    | `/availableUsers`  Provides list of all available user in the db                       |
| POST   | `/creategroup`     Creates a new group                       |
| GET    | `/:groupId`        Get details of a group                        |
| PATCH  | `/:groupId`        Edit details of a group only name and description                      |
| DELETE | `/:groupId`        Delete Group Details                       |
| POST   | `/group-settlements/:groupId` Gets group balance sheet who owes whom how much in simplified form            |
| POST   | `/makesettlement/:groupId`    Settles users balances based on the data provided above            |
| GET    | `/`                           Gets list of all the groups user is a part of             |
| GET    | `/settlements/user`           Gets all the settlements done by the user            |
| GET    | `/settlements/group/:groupId` Gets all the settlements happend in the group            |
| POST   | `/group/:groupId/:userId`      Add members in expense group           |

### User Routes
## Route Url- server.splitbills.site/api/v1/users

| Method | Route                                     |
|--------|-------------------------------------------|
| POST   | `/register`      Register new user                         |
| POST   | `/login`         Logins new user                         |
| POST   | `/logout`        Logs out new user                         |
| GET    | `/availableusers` gets list of all available user in the db {protected routes}                        |
| POST   | `/changepassword` Changes password of the user {protected routes}                         |
| GET    | `/getcurrentuser`  Get details of the logged in user   {protected routes}                    |
| POST   | `/changeuserdetails`  Change details of the logged in user   {protected routes}                 |



### {protected routes}- This are routes that you need to login to access on login you will provided with a jwt access token which will be verified each time you try to access a protected route or it will throw a '401'- unauthorised error.
