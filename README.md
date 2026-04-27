# Deknek Notes

A production-ready full-stack web application for secure personal note-taking. Built with React, Node.js, Express, MongoDB, and JWT authentication.

## Features

### Authentication
- User registration with name, email, and password
- Secure login with JWT token-based authentication
- Password hashing using bcrypt
- Protected routes for authenticated users
- Automatic token validation and session management

### Notes System
- Create, read, update, and delete personal notes
- Search notes by title or content
- Responsive card-based layout
- Edit and delete confirmations
- Timestamps for all notes
- Users can only access their own notes

### UI/UX
- Clean, modern interface with Tailwind CSS
- Loading states and error handling
- Responsive design for all screen sizes
- Lucide icons throughout
- Form validation with user-friendly error messages

## Tech Stack

### Frontend
- React 18 with Vite
- React Router v6
- Tailwind CSS
- Axios
- Lucide React Icons

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs for password hashing
- CORS enabled

## Project Structure

```
deknek-project/
│
├── client/                     # React Frontend
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── api/                # API functions
│   │   │   └── api.js
│   │   │
│   │   ├── components/         # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   │
│   │   ├── pages/              # Page components
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   └── Dashboard.jsx
│   │   │
│   │   ├── context/            # React Context
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── hooks/              # Custom hooks
│   │   │   └── useAuth.js
│   │   │
│   │   ├── App.jsx             # Main app component
│   │   ├── main.jsx            # Entry point
│   │   └── index.css           # Tailwind imports
│   │
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── .env.example
│
├── server/                     # Node.js Backend
│   ├── config/
│   │   └── db.js               # Database connection
│   │
│   ├── controllers/
│   │   ├── authController.js   # Auth operations
│   │   └── noteController.js   # CRUD operations
│   │
│   ├── models/
│   │   ├── User.js             # User schema
│   │   └── Note.js             # Note schema
│   │
│   ├── routes/
│   │   ├── authRoutes.js       # Auth endpoints
│   │   └── noteRoutes.js       # Notes endpoints
│   │
│   ├── middleware/
│   │   └── authMiddleware.js   # JWT verification
│   │
│   ├── utils/
│   │   └── generateToken.js    # JWT token generation
│   │
│   ├── server.js               # Entry point
│   ├── package.json
│   └── .env.example
│
├── README.md
└── TODO.md
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd deknek-project
```

2. Install server dependencies:
```bash
cd server
npm install
```

3. Install client dependencies:
```bash
cd ../client
npm install
```

### Environment Variables

#### Server (.env)
Create a `.env` file in the `server/` directory:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/deknek
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

#### Client (.env)
Create a `.env` file in the `client/` directory:
```env
VITE_API_URL=http://localhost:5000/api
```

### Running the Application

1. Start MongoDB (if running locally):
```bash
mongod
```

2. Start the backend server:
```bash
cd server
npm run dev
```

3. Start the frontend development server:
```bash
cd client
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## API Endpoints

### Authentication
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | /api/auth/signup | Register new user | No |
| POST | /api/auth/login | Login user | No |
| GET | /api/auth/me | Get current user | Yes |

### Notes
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | /api/notes | Get all notes | Yes |
| POST | /api/notes | Create note | Yes |
| GET | /api/notes/:id | Get single note | Yes |
| PUT | /api/notes/:id | Update note | Yes |
| DELETE | /api/notes/:id | Delete note | Yes |

## Deployment

### Backend Deployment (Render/Railway/Heroku)
1. Set environment variables in your hosting platform
2. Ensure `NODE_ENV=production`
3. Update `CLIENT_URL` to your frontend URL

### Frontend Deployment (Vercel/Netlify)
1. Set `VITE_API_URL` to your backend URL
2. Build the project: `npm run build`
3. Deploy the `dist/` folder

## Security Features
- Passwords hashed with bcrypt (salt rounds: 10)
- JWT tokens with 30-day expiration
- Protected API routes with middleware
- CORS configuration
- Input validation on both frontend and backend
- XSS protection through React's built-in escaping

## License
MIT License

