FintechFlow – Full Stack Fintech Simulation App
📖 Project Description

FintechFlow is a full-stack fintech simulation web application built using React (frontend) and Node.js + Express (backend). It provides a basic banking system including wallet management, transactions tracking, loan applications, and an EMI calculator with backend computation.

The project demonstrates:

REST API integration
React Router navigation
State management
Form validation
Backend-driven calculations
Responsive UI design
⚙️ Tech Stack
Frontend:
React.js (Vite)
React Router DOM
CSS (custom styling)
Backend:
Node.js
Express.js
CORS middleware
🚀 How to Run Locally
1️⃣ Clone Repository
git clone https://github.com/your-username/fintechflow.git
cd fintechflow
2️⃣ Run Backend
cd backend
npm install
node server.js

Backend runs on:

http://localhost:5000
3️⃣ Run Frontend
cd frontend
npm install
npm run dev

Frontend runs on:

http://localhost:5173
🌐 Deployment Links (Replace later)
Frontend (Vercel): https://your-frontend-url.vercel.app
Backend (Render): https://your-backend-url.onrender.com
📡 API Endpoints
Wallet
Method	Endpoint	Description
GET	/api/wallet	Get wallet data
POST	/api/wallet/deposit	Add money
POST	/api/wallet/withdraw	Withdraw money
Transactions
Method	Endpoint	Description
GET	/api/transactions	Get all transactions
GET	/api/transactions?type=credit	Filter credit transactions
GET	/api/transactions?type=debit	Filter debit transactions
Loans
Method	Endpoint	Description
GET	/api/loans	Get all loans
POST	/api/loans	Create loan application
PATCH	/api/loans/:id/status	Update loan status
EMI Calculator
Method	Endpoint	Description
POST	/api/emi/calculate-emi	Calculate EMI using backend
Request Body:
{
  "principal": 50000,
  "rate": 12,
  "time": 24
}
Response:
{
  "emi": "2350.45"
}
👤 Author

Name: Your Name
Roll Number: Your Roll Number
Course: BS Fintech – Web Programming

