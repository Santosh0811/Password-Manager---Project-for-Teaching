<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
📘 Password Manager – Full MERN Stack Project

A simple and secure password manager built using React (Frontend) and Node.js + Express (Backend) with MongoDB for storing encrypted passwords.

🚀 Features

🔐 Add, view, update, and delete saved passwords

🔑 Password encryption using bcrypt/crypto

📦 Secure login and authentication

📱 Responsive UI (React)

🍃 MongoDB database

🌐 REST API backend

📝 Project Structure
password-manager/
│
├── backend/        # Node.js + Express API
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── index.js
│
└── frontend/       # React-Vite App
    ├── src/
    ├── public/
    └── package.json

🔧 Tech Stack
Frontend

React

Rest API

TailwindCSS

Backend

Node.js

Express.js

MongoDB + Mongoose

Crypto / bcrypt for encryption

⚙️ Installation Guide
1️⃣ Clone the Repository
git clone https://github.com/Santosh0811/Password-Manager---Project-for-Teaching.git

🖥️ Backend Setup
2️⃣ Install Dependencies
cd backend
npm install

3️⃣ Create .env file
MONGO_URI=your-mongodb-url
JWT_SECRET=your-secret-key
PORT=5000

4️⃣ Start the Server
node --watch index.js


Backend will run on
👉 http://localhost:5000

🌐 Frontend Setup
5️⃣ Install Dependencies
cd ../frontend
npm install

6️⃣ Start the React App
npm run dev


Frontend will run on
👉 http://localhost:5173

🔗 API Endpoints (Backend)
Method	Endpoint	Description
GET	/api/passwords/	Get all saved passwords
POST	/api/passwords/	Add new password
PUT	/api/passwords/:id	Update password
DELETE	/api/passwords/:id	Delete password
🛡️ Security

Passwords are encrypted before storing

JWT authentication

Secured API routes

.env used for sensitive data

🙋‍♂️ Author

Santosh Vishwakarma
🔗 GitHub: https://github.com/Santosh0811
>>>>>>> 69657b3124f3c4f70010e6a925564937a59c1163
