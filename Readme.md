
# 💳 Razorpay Donation App

A simple and customizable donation/payment application built with **React.js**, **Node.js**, **MongoDB**, and **Razorpay API** integration.
💳 Razorpay Payment Integration App – Live Demo: [View Live](https://razorpayintegration-git-main-shubham-sanodiyas-projects.vercel.app)
## 📦 Tech Stack

- **Frontend**: React.js + Tailwind CSS
- **Backend**: Node.js + Express.js
- **Database**: MongoDB Atlas
- **Payment Gateway**: Razorpay (Test Mode)
- **Deployment**: [ Vercel / Render]


## 🛠️ API Structure
### 📍 POST `/api/payments/create-order`

**Purpose:** Create a Razorpay order with user details + tip
#### Request Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "amount": 2500,
  "tip": 18,
  "anonymous": false,
  "address": "New Delhi"
}

## ✨ Features
- Choose preset donation amounts or enter a custom one
- Add optional tips (0%,5%,10%, 18%)
- Anonymous donation option
- Razorpay secure test payment integration
- Stores donation data in MongoDB
- Responsive UI using Tailwind CSS

## 📁 Folder Structure

RazorpayPayment/
│
├── Backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── .env
│ └── server.js
│
├── Frontend/
│ ├── src/
│ ├── .env
│ └── vite.config.js
│
├── .gitignore
└── README.md


## ⚙️ Setup Instructions

### 1️⃣ Clone the Project

```bash   
git clone https://github.com/shubham28052001/Razorpay.git
cd RAZORPAYPAYMENT


2️⃣ Backend Setup
cd Backend
npm install


📄 Create .env file in Backend:
PORT=4000
MONGO_KEY_URL=your_mongodb_connection_string
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret


▶️ Start Backend Server:
node server.js
 #or 
npx nodemon 
 #or 
npm start


3️⃣ Frontend Setup
cd Frontend
npm install


📄 Create .env file in Frontend:
VITE_URL=http://localhost:4000


▶️ Start Frontend:
npm run dev


💳 Razorpay Test Card (Use for Payment Testing)

🧪 Test Card Details (For Razorpay Sandbox Mode)
Use these test credentials to simulate a successful payment:

Field	Test Value
Card Number	4111 1111 1111 1111
Expiry	Any future date (e.g., 12/30)
CVV	123
OTP	123456
 You can also use any UPI ID like test@upi – no real money is deducted.

 ## 🖼️ Screenshots

| ![Home](./Screenshots/home.png) | ![Payment](./Screenshots/payment.png) |

💳 Razorpay Payment Integration App – Live Demo: [View Live](https://razorpayintegration-git-main-shubham-sanodiyas-projects.vercel.app)

🙋‍♂️ Author or Contact
## 🙋‍♂️ Author
**Shubham Sanodiya**  
🔗 [GitHub](https://github.com/shubham28052001)  
📧 shubhamsanodiya2805@gmail.com
