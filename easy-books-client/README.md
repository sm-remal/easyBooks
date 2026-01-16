# 📚 easyBooks | Build a Bright Future for Your Child

easyBooks is a modern, full-stack web application designed for book enthusiasts. It provides a platform to discover, buy, and manage a curated collection of best-selling books across various genres. Built with a focus on user experience, it features secure authentication and a clean, responsive interface.

## ✨ Features

-   **User Authentication:** Secure login and registration using **NextAuth.js** with Google Provider and custom credentials.
-   **Book Management:** Users can browse a collection of books and add new books to the platform.
-   **Protected Routes:** Essential pages like `/add-book` are protected, ensuring only authenticated users can access them.
-   **Responsive Design:** Fully optimized for mobile, tablet, and desktop screens using **Tailwind CSS**.
-   **Dynamic Metadata:** Optimized for SEO with dynamic titles and descriptions for each page.
-   **Backend Integration:** Powered by an **Express.js** server and **MongoDB** for persistent data storage.

## 🚀 Tech Stack

**Frontend:**
-   **Framework:** Next.js 14+ (App Router)
-   **Styling:** Tailwind CSS
-   **Icons:** Lucide-react
-   **Auth:** NextAuth.js

**Backend:**
-   **Runtime:** Node.js
-   **Framework:** Express.js
-   **Database:** MongoDB Atlas
-   **Security:** Bcrypt.js (for password hashing)

## 🛠️ Installation & Setup

Follow these steps to run the project locally:

### 1. Clone the repository
```bash
git clone [https://github.com/your-username/easy-books.git](https://github.com/your-username/easy-books.git)
cd easy-books

# For Frontend
npm install

# For Backend (go to your backend folder)
cd backend
npm install


NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXT_PUBLIC_API_URL=http://localhost:5000


MONGODB_URI=your_mongodb_connection_string
PORT=5000

# Run Backend (from backend folder)
npm start

# Run Frontend (from root folder)
npm run dev

├── app/                # Next.js App Router (Frontend)
├── components/         # Reusable UI components (Navbar, Footer, etc.)
├── public/             # Static assets (images, logo)
├── middleware.js       # Auth protection middleware
└── backend/            # Express.js server & MongoDB logic