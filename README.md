User Management REST API

Project Overview

This project is a User Management REST API built with Node.js, TypeScript, TypeORM, and MySQL. It provides CRUD (Create, Read, Update, Delete) functionality for managing users and follows best practices for collaboration using Git and GitHub branching.

Technologies Used

Backend: Node.js with TypeScript

ORM: TypeORM for database interactions

Database: MySQL

API Framework: Express.js

Features

Create a user ✅ (Implemented by Alice)

Delete a user ✅ (Implemented by Bob)

List and retrieve users ✅ (Implemented by Carol)

Manage main branch and integrate changes ✅ (Managed by the Leader)

Project Structure

user-management-api/
│── src/
│   ├── entities/
│   │   ├── User.ts
│   ├── routes/
│   │   ├── user.ts
│   ├── index.ts
│── .gitignore
│── package.json
│── tsconfig.json
│── ormconfig.json
│── README.md

Setup Instructions

1. Clone the Repository

git clone https://github.com/your-username/user-management-api.git
cd user-management-api

2. Install Dependencies

npm install

3. Configure Database Connection

Edit ormconfig.json with your MySQL credentials:

{
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "root",
  "password": "your_password",
  "database": "user_management",
  "synchronize": true,
  "logging": false,
  "entities": ["src/entities/**/*.ts"]
}

4. Run the Server

npm run dev

The API will be available at http://localhost:3000/api.

API Endpoints

Method

Endpoint

Description

POST

/users

Create a new user

GET

/users

Get all users

GET

/users/:id

Get a user by ID

DELETE

/users/:id

Delete a user

Git Workflow

Each team member works on their own branch and follows these steps:

Create a branch for your feature:

git checkout -b feature-name

Commit your changes:

git add .
git commit -m "Describe your changes"

Push your branch:

git push origin feature-name

Create a Pull Request (PR) to merge into main.

Leader reviews and merges the PR.

Contributing

Fork the repository.

Follow the Git workflow above.

Follow code consistency and best practices.

License

This project is licensed under the MIT License.
