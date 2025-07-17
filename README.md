
# 🐞 MERN Bug Tracker

A full-stack issue tracking application built with the MERN (MongoDB, Express.js, React, Node.js) stack. Users can report, update, and resolve bugs. The application integrates robust testing and debugging practices to ensure reliability.

---

## 🚀 Features

- Report new bugs via form submission
- View a list of all reported bugs
- Update bug status (open, in-progress, resolved)
- Delete bugs
- Integrated unit, integration, and end-to-end testing
- Error boundaries in frontend and Express middleware in backend

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mern-bug-tracker.git
cd mern-bug-tracker
```

### 2. Install Backend Dependencies

```bash
cd server
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../client
npm install
```

---

## 🛠️ Running the Application

### 1. Start MongoDB (locally or via Atlas)

Ensure MongoDB is running, or set up your Mongo URI in `.env`:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/bugtracker
```

### 2. Start Backend

```bash
cd server
npm run dev
```

### 3. Start Frontend

```bash
cd ../client
npm start
```

---

## 🧪 Running Tests

### 🔹 Backend Tests (Jest + Supertest)

```bash
cd server
npm test
```

Includes:
- Unit tests for validation and helper functions
- Integration tests for bug routes
- Mocking database with `jest.mock`

### 🔹 Frontend Tests (React Testing Library)

```bash
cd client
npm test
```

Includes:
- Unit tests for components (e.g., BugForm)
- Integration tests with mocked API responses
- UI state rendering under empty and error conditions

---

## 🔍 Debugging Techniques

### Backend:
- `console.log()` for inspecting request data
- Express middleware for centralized error handling (`errorHandler.js`)
- Debug server using `node --inspect` and Chrome DevTools

### Frontend:
- React Developer Tools for inspecting component state and props
- Chrome DevTools > Network tab for tracking API requests
- Error boundaries (`ErrorBoundary.jsx`) to catch rendering failures

---

## ✅ Testing Approach

| Layer       | Type         | Tools                        |
|-------------|--------------|------------------------------|
| Backend     | Unit         | Jest                         |
| Backend     | Integration  | Supertest                    |
| Backend     | Mocking      | `jest.mock`, manual mocks    |
| Frontend    | Unit         | React Testing Library        |
| Frontend    | Integration  | API mocking with Axios       |
| Frontend    | State Render | Empty/Error/Loading views    |

### Test Coverage Focus:
- Controller and route logic
- Validation helpers
- Component rendering
- Form submission and user input
- API interaction and state updates

> **Goal**: Achieve confidence in core flows with fast feedback from local testing.

---

## 📁 Project Structure

```
mern-bug-tracker/
├── client/                # React frontend
│   ├── components/        # BugList, BugForm, ErrorBoundary
│   ├── tests/             # Unit and integration tests
├── server/                # Express backend
│   ├── controllers/       # Bug handlers
│   ├── models/            # Mongoose schema
│   ├── routes/            # Bug routes
│   ├── middleware/        # Error handler
│   ├── tests/             # Unit and integration tests
├── README.md              # This file
```

---

## 🙌 Acknowledgments

- [React](https://reactjs.org)
- [Express](https://expressjs.com)
- [MongoDB](https://www.mongodb.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/)
- [Supertest](https://github.com/visionmedia/supertest)
