# TaskFlow - AI Assisted Task Management Application

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2.0-blue?style=for-the-badge&logo=react" alt="React">
  <img src="https://img.shields.io/badge/Express-5.2.1-black?style=for-the-badge&logo=express" alt="Express">
  <img src="https://img.shields.io/badge/MongoDB-9.0.0-green?style=for-the-badge&logo=mongodb" alt="MongoDB">
  <img src="https://img.shields.io/badge/AI-Google%20Generative%20AI-purple?style=for-the-badge&logo=google" alt="Google Generative AI">
</p>

> An intelligent task management application powered by AI that helps you organize, track, and complete your tasks with smart assistance.

## ✨ Features

### 🔐 Authentication System
- Secure user registration and login
- JWT-based authentication
- Role-based access control (Admin & User)

### 📋 Task Management
- Create, read, update, and delete tasks
- Task categorization and prioritization
- Due date tracking with automated reminders
- Task status management (pending, in-progress, completed)

### 🤖 AI-Powered Chatbot
- Intelligent task assistance
- Natural language task creation
- Task recommendations and summaries
- Context-aware conversations

### 📊 Admin Dashboard
- User management overview
- Task analytics and statistics
- System health monitoring

### ⏰ Automated Features
- Scheduled task reminders via cron jobs
- Automated task status updates
- Background processing for AI operations

## 🏗️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React 19, Vite, Tailwind CSS, React Router |
| **Backend** | Express.js, Node.js |
| **Database** | MongoDB, Mongoose ODM |
| **Authentication** | JWT, bcrypt |
| **AI** | Google Generative AI |
| **Scheduling** | node-cron |

## 📁 Project Structure

```
TASK AUTOMATION/
├── client/                     # React Frontend
│   ├── src/
│   │   ├── Api/               # API service modules
│   │   ├── Components/        # Reusable UI components
│   │   ├── Context/           # React Context (Auth)
│   │   ├── Pages/             # Page components
│   │   └── Public/            # Static assets
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── server/                     # Express Backend
│   ├── App/
│   │   ├── Controller/        # Route controllers
│   │   ├── CronJob/           # Scheduled jobs
│   │   ├── Middleware/        # Auth & validation
│   │   ├── Model/             # Mongoose models
│   │   ├── Router/            # API routes
│   │   └── Services/          # AI services
│   ├── index.js
│   └── package.json
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   cd "TASK AUTOMATION"
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Configure environment variables**

   Create a `.env` file in the `server` directory:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   GOOGLE_API_KEY=your_google_generative_ai_api_key
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd server
   npm start
   ```
   Server runs on `http://localhost:5000`

2. **Start the frontend (in a new terminal)**
   ```bash
   cd client
   npm run dev
   ```
   Client runs on `http://localhost:5173`

## 📝 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | User login |
| GET | `/api/auth/profile` | Get user profile |

### Tasks
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| POST | `/api/tasks` | Create new task |
| PUT | `/api/tasks/:id` | Update task |
| DELETE | `/api/tasks/:id` | Delete task |

### Chatbot
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/chatbot/message` | Send message to AI |

### Users (Admin)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |
| DELETE | `/api/users/:id` | Delete user |

## 🔧 Available Scripts

### Client
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Server
```bash
npm start        # Start server with nodemon
npm test         # Run tests
```

## 📄 License

ISC License - feel free to use this project for learning and development.

---

<p align="center">Built with ❤️ using MERN Stack + AI</p>
