# 🚀 ExpressAuthKit — Secure Authentication Boilerplate for Express.js

![Node.js](https://img.shields.io/badge/Node.js-v18+-green)
![Express](https://img.shields.io/badge/Express-5.x-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-green)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

---

## 📌 Overview

**ExpressAuthKit** is a **production-ready authentication boilerplate** built with **Node.js, Express, MongoDB, and JWT**.

It is designed **for developers** who want to:

- Skip repetitive auth setup  
- Start new projects faster  
- Reuse a clean, scalable auth foundation  
- Follow best practices out of the box  

This boilerplate focuses on **security, structure, and reusability** — not UI.

---

## ✨ Why ExpressAuthKit?

✔ Reusable across projects  
✔ Clean MVC architecture  
✔ JWT-based authentication  
✔ Role-based authorization  
✔ Centralized error handling  
✔ Developer-friendly structure  

---

## ✨ Features

### 🔐 Authentication
- User Registration
- User Login
- JWT Token Generation
- Secure password hashing using bcrypt

### 👤 Authorization
- Protected routes using JWT
- Role-based access control (`admin`, `user`)

### 🛡 Security
- Helmet for HTTP headers
- Encrypted passwords
- JWT expiration support

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT
- **Security:** Helmet, bcrypt
- **Environment:** dotenv

---

## 📁 Project Structure

```
└── 📁 ExpressAuthKit
    ├── 📁 client
    ├── 📁 server
    │   └── 📁 src
    │       ├── 📁 config
    │       │   └── db.js
    │       ├── 📁 controllers
    │       │   ├── authController.js
    │       │   └── userController.js
    │       ├── 📁 middlewares
    │       │   ├── auth.js
    │       │   ├── errorHandler.js
    │       │   └── role.js
    │       ├── 📁 models
    │       │   └── User.js
    │       ├── 📁 routes
    │       │   ├── authRoute.js
    │       │   └── userRoute.js
    │       ├── 📁 utils
    │       │   ├── asyncWrapper.js
    │       │   ├── ErrorHandler.js
    │       │   └── generateToken.js
    │       ├── app.js
    │       └── server.js
    ├── .env
    ├── package.json
    └── LICENSE.md
```

---

## ⚙️ Installation

```bash
git clone https://github.com/shafqat-baloch786/ExpressAuthKit.git
cd ExpressAuthKit/server
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
JWT_EXPIRES_IN=7d
NODE_ENV=development
```

---

## ▶️ Running the Project

```bash
npm run dev
```

or

```bash
npm start
```

---

## 🔗 API Endpoints

### Auth

| Method | Endpoint             | Description        |
|------|----------------------|--------------------|
| POST | /api/auth/register   | Register user      |
| POST | /api/auth/login      | Login user         |

### User

| Method | Endpoint | Description |
|------|----------|-------------|
| GET  | /api/me  | Get profile |

---

## 🚧 Future Enhancements

- Refresh tokens
- Email verification
- OAuth support
- Swagger documentation

---

## 📄 License

MIT License