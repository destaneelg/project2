# project2

## Instructions

#### App Setup

1. Create a GitHub repo called `project 2` and clone it to your computer.

2. Make a package.json file by running `npm init` from the command line.

3. Install the Express npm package: `npm install express`.

4. Create a server.js file.

5. Install the Handlebars npm package: `npm install express-handlebars`.

6. Install MySQL npm package: `npm install mysql`.

7. Require the following npm packages inside of the server.js file:
   * express

#### DB Setup

1. Inside your `projects` directory, create a folder named `db`.

2. In the `db` folder, create a file named `schema.sql`. Write SQL queries this file that do the following:

   * Create the `projects_db`.
   * Switch to or use the `projects_db`.
   * Create a `projects` table with these fields:
     * **id**: an auto incrementing int that serves as the primary key.
     * **project_name**: a string.
     * **prority_leve**: a string (Low, Medium, High).
     * **status**: a sting (open, completed)

     //make a db for people or project owners

3. Still in the `db` folder, create a `seeds.sql` file. In this file, write insert queries to populate the `burgers` table with at least three entries.

4. Run the `schema.sql` and `seeds.sql` files into the mysql server from the command line

5. Now you're going to run these SQL files.

   * Make sure you're in the `db` folder of your app.

   * Start MySQL command line tool and login: `mysql -u root -p`.

   * With the `mysql>` command line tool running, enter the command `source schema.sql`. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.

   * Now insert the entries you defined in `seeds.sql` by running the file: `source seeds.sql`.

   * Close out of the MySQL command line tool: `exit`.

#### Config Setup

1. Inside your `project` directory, create a folder named `config`.

2. Create a `connection.js` file inside `config` directory.

   * Inside the `connection.js` file, setup the code to connect Node to MySQL.

   * Export the connection.

3. Create an `orm.js` file inside `config` directory.

   * Import (require) `connection.js` into `orm.js`

   * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

     * `insertOne()`
     * `updateOne()`
     * `deleteOne()`

   * Export the ORM object in `module.exports`.

#### Model setup

* Inside your `project` directory, create a folder named `models`.

  * In `models`, make a `project.js` file.

    * Inside `project.js`, import `orm.js` into `project.js`

    * Also inside `project.js`, create the code that will call the ORM functions using project specific input for the ORM.

    * Export at the end of the `project.js` file.

#### Controller setup

1. Inside your `project` directory, create a folder named `controllers`.

2. In `controllers`, create the `projects_controller.js` file.

3. Inside the `projects_controller.js` file, import the following:

   * Express
   * `project.js`

4. Create the `router` for the app, and export the `router` at the end of your file.

#### View setup

1. Inside your `project` directory, create a folder named `views`.

   * Create the `index.handlebars` file inside `views` directory.

   * Create the `layouts` directory inside `views` directory.

     * Create the `main.handlebars` file inside `layouts` directory.

     * Setup the `main.handlebars` file so it's able to be used by Handlebars.

     * Setup the `index.handlebars` to have the template that Handlebars can render onto.

     * Create a button in `index.handlebars` that will submit the user input into the database.

#### Directory structure

All the recommended files and directories from the steps above should look like the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

### Reminder: Submission on BCS

* Please submit both the deployed Heroku link to your homework AND the link to the Github Repository!