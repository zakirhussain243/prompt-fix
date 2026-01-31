# Resume Analyzer Portal 🚀

A modern React-based web application where users can log in, upload their resume (PDF), paste a job description, and get an AI-generated analysis of how well the resume matches the job.

---

## ✨ Features

- 🔐 User Login (protected routes)
- 🏠 Beautiful Home Page
- 📄 Resume Upload (PDF)
- 📝 Job Description Input
- 🤖 AI-powered Resume Analysis
- 🔒 Protected Pages (Users & Resume)
- 🎨 Clean & Modern UI

---

## 🛠️ Tech Stack

**Frontend**
- React
- React Router DOM
- Axios
- CSS (Custom styling)

**Backend**
- Node.js
- Express
- AI Resume Extraction API (custom endpoint)

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/your-repo-name.git
2️⃣ Navigate to project
cd client

3️⃣ Install dependencies
npm install

4️⃣ Run the app
npm run dev


or (CRA)

npm start

🔐 Authentication Flow

User lands on Home Page

Clicks Login

On successful login:

Redirected to Resume Page

Protected routes unlocked

Direct access to protected routes is blocked if not logged in

🌐 API Endpoint Used
POST http://localhost:3000/resume/extract


FormData

prompt → Job Description

resume → PDF file

📌 Notes

Only PDF resumes are supported

Login is currently basic (localStorage based)

Can be upgraded to JWT authentication

.env files are ignored for security

🔮 Future Improvements

JWT authentication

Drag & Drop resume upload

Loading indicators

Error handling & toast notifications

Dark mode

User profile page

👨‍💻 Author

Zakir

⭐ If you like this project

Give it a ⭐ on GitHub 🙂

