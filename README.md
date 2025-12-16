# EDUVERSE - Vehicle Learning Management System

A comprehensive MERN stack web application for teaching 2-wheeler and 4-wheeler driving theory with interactive lessons, quizzes, certificates, and a 3D driving simulator.

---

## 🚀 Execution Guide (Fresh System Setup)

Follow these steps to set up and run the project on a new system.

### 1. Prerequisites
Ensure you have the following installed:
- **Node.js** (v16 or higher)
- **MongoDB** (v4.4 or higher) - [Download Community Server](https://www.mongodb.com/try/download/community)
- **Git**

### 2. Database Setup (MongoDB)
1.  **Start MongoDB Service**:
    *   **Windows**: Open Services (`services.msc`), find "MongoDB Server", and ensure it is **Running**.
    *   **Mac/Linux**: Run `sudo systemctl start mongod` or `brew services start mongodb-community`.
2.  **Verify Connection**:
    *   The app uses the default connection string: `mongodb://localhost:27017/eduverse` (or `mongodb://127.0.0.1:27017/eduverse`).
    *   No manual database creation is needed; the app will create it automatically upon connection.

### 3. Backend Setup
1.  Open a terminal and navigate to the `backend` folder:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the `backend` root directory and paste the following:
    ```env
    PORT=5000
    MONGODB_URI=mongodb://127.0.0.1:27017/eduverse
    JWT_SECRET=eduverse_secret_key_2024
    JWT_EXPIRE=30d
    NODE_ENV=development
    FRONTEND_URL=http://localhost:5173
    
    # Email Configuration (Optional for development, required for emails)
    EMAIL_HOST=smtp.gmail.com
    EMAIL_PORT=587
    EMAIL_USER=your_email@gmail.com
    EMAIL_PASS=your_app_password
    ```
4.  **Seed the Database** (Crucial for first run):
    Populate the database with initial courses, lessons, and admin users.
    ```bash
    npm run seed:final
    ```
5.  Start the Backend Server:
    ```bash
    npm run dev
    ```
    *   Server will start on: `http://localhost:5000`

### 4. Frontend Setup
1.  Open a **new terminal** window and navigate to the `frontend` folder:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the `frontend` root directory:
    ```env
    VITE_API_URL=http://localhost:5000/api
    ```
4.  Start the Frontend Server:
    ```bash
    npm run dev
    ```
    *   Frontend will launch at: `http://localhost:5173` (or similar port).

---

## 🔑 Default Login Credentials

Use these credentials to log in and test different roles:

| Role | Email | Password |
| :--- | :--- | :--- |
| **Admin** | `admin@eduverse.com` | `Admin@123` |
| **Instructor** | `instructor@eduverse.com` | `Instructor@123` |
| **Student** | `student@eduverse.com` | `Student@123` |

> **Note:** You can create new students via the Register page.

---

## 📁 Project Structure

```
EDUVESRE/
├── backend/                # Node.js & Express Server
│   ├── src/
│   │   ├── config/         # DB Connection
│   │   ├── controllers/    # Route Logic
│   │   ├── models/         # Mongoose Schemas (User, Course, Lesson, etc.)
│   │   ├── routes/         # API Endpoints
│   │   └── utils/          # Helpers (Seeding, Email, etc.)
│   └── uploads/            # Storage for certificates & images
│
├── frontend/               # React & Vite Client
│   ├── src/
│   │   ├── components/     # Reusable UI Components
│   │   ├── pages/          # Full Page Views (Dashboard, Home, Login)
│   │   ├── services/       # API Integration (Axios)
│   │   └── styles/         # Global Styles & Tailwind
│   └── public/             # Static Assets
```

---

## ✨ Features

*   **Role-Based Access**: Admin, Instructor, and Student portals.
*   **Course Management**: Create and manage 2-Wheeler and 4-Wheeler courses.
*   **Interactive Lessons**: Video-based lessons with embedded road signs and theory.
*   **3D Simulator**: WebGL-based driving simulator for practice in the browser.
*   **Quizzes & Progress**: Automatic grading and progress tracking per vehicle type.
*   **Certificates**: Auto-generated PDF certificates upon course completion.
*   **Payment Integration**: Dummy payment gateway for testing enrollment flows.
*   **Attendance**: Automated tracking of student login/logout times.

---

## 🛠️ Tech Stack

*   **Frontend**: React.js, Vite, Tailwind CSS, Three.js (@react-three/fiber).
*   **Backend**: Node.js, Express.js.
*   **Database**: MongoDB (Mongoose ODM).
*   **Authentication**: JSON Web Tokens (JWT) & bcryptjs.
*   **Tools**: PDFKit (Certificates), Nodemailer (Emails), Multer (Uploads).

---

## 🐛 Troubleshooting Common Issues

**1. "MongoDB Connection Error"**
*   Ensure the MongoDB service is running.
*   Check if `MONGODB_URI` in `backend/.env` is correct. Try exchanging `localhost` with `127.0.0.1`.

**2. "CORS Error" or "Network Error"**
*   Verify the Backend is running on port 5000.
*   Verify `VITE_API_URL` in `frontend/.env` is exactly `http://localhost:5000/api`.

**3. "Login Failed"**
*   Ensure you ran `npm run seed:final` in the backend to create the default users.
*   Check server logs for specific error messages.

**4. 3D Simulator not loading**
*   Ensure your browser supports WebGL.
*   Check connection speed if assets are loading slowly.

---

**made by:AKSHATA.G.MASHETTI**

