📘 Password Manager – Full Stack Project

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
