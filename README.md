# User Management REST API

## Project Overview
This project is a **User Management REST API** built with **Node.js, TypeScript, TypeORM, and MySQL**. It provides CRUD (Create, Read, Update, Delete) functionality for managing users and follows best practices for collaboration using **Git and GitHub branching**.

## Technologies Used
- **Backend**: Node.js with TypeScript
- **ORM**: TypeORM for database interactions
- **Database**: MySQL
- **API Framework**: Express.js

## Features
- **Create a user** ✅ (Implemented by Rovic Steve Real)
- **Delete a user** ✅ (Implemented by Niño Rollane Ocliasa)
- **List and retrieve users** ✅ (Implemented by Jhanna Kris Durano)
- **Manage main branch and integrate changes** ✅ (Managed by the Sean Joseph C. Arcana)

## Project Structure
```
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
```

## Setup Instructions

### 1. Clone the Repository
```sh
git clone https://github.com/your-username/user-management-api.git
cd user-management-api
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Configure Database Connection
Edit `ormconfig.json` with your MySQL credentials:
```json
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
```

### 4. Run the Server
```sh
npm run dev
```
The API will be available at `http://localhost:3000/api`.

## API Endpoints
| Method | Endpoint       | Description        |
|--------|--------------|--------------------|
| POST   | /users       | Create a new user |
| GET    | /users       | Get all users     |
| GET    | /users/:id   | Get a user by ID  |
| DELETE | /users/:id   | Delete a user     |

## Git Workflow
Each team member works on their own branch and follows these steps:
1. **Create a branch** for your feature:
   ```sh
   git checkout -b feature-name
   ```
2. **Commit your changes**:
   ```sh
   git add .
   git commit -m "Describe your changes"
   ```
3. **Push your branch**:
   ```sh
   git push origin feature-name
   ```
4. **Create a Pull Request (PR)** to merge into `main`.
5. **Leader reviews and merges the PR.**

## Contributing
- Fork the repository.
- Follow the Git workflow above.
- Follow code consistency and best practices.

## License
This project is licensed under the MIT License.

