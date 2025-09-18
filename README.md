# 📝 Shabd-Setu Blog Platform

A modern, responsive blog platform built with **React**, **TailwindCSS**, and **React Router**.  
It features elegant blog detail pages, gradient backgrounds, interactive comments, and a clean card-based UI.

---

## 🚀 Features

- 📖 **Blog Listing & Detail Pages**  
  Browse blogs on the home page and view full details with thumbnail, subtitle, author info, and content.  

- 🎨 **Modern UI with TailwindCSS**  
  Responsive design with gradient backgrounds, smooth shadows, and frosted-glass effects.  

- 🖼️ **Dynamic Thumbnails**  
  Blog thumbnails are styled with a **16:9 aspect ratio** (like video screens) for consistency.  

- 💬 **Interactive Comments**  
  Add, like, reply, and share comments with live updates.  

- 🔄 **Smooth Navigation**  
  Uses `react-router-dom` for client-side routing and `ScrollToTop` utility to reset scroll on navigation.  

- 🌟 **Reusable Components**  
  Header, Blog cards, filters, trending authors, and more — built as modular React components.  

---

## 🛠️ Tech Stack

**Frontend**
- [React 19](https://react.dev/) — UI framework  
- [React Router v7](https://reactrouter.com/) — routing  
- [TailwindCSS 3](https://tailwindcss.com/) — utility-first CSS  
- [Lucide React](https://lucide.dev/) — icon set  
- [Motion](https://motion.dev/) — animations  

**Tooling**
- `react-scripts` — Create React App build scripts  
- `postcss`, `autoprefixer` — CSS processing  

**Testing**
- `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/dom`, `@testing-library/user-event`  

**Performance**
- `web-vitals` — Core Web Vitals metrics  

---

## 📂 Project Structure

src/
│ App.js # Main app entry
│ App.css # Global styles
│ index.js # React DOM entry
│ index.css # Tailwind base styles
│ reportWebVitals.js # Performance monitoring
│ setupTests.js # Testing setup
│
├── components/ # Reusable UI components
│ ├── Add_comment.jsx # Comment section with like/reply/share
│ ├── ArticleCard.jsx # Blog preview card for homepage
│ ├── BlogDetail.jsx # Blog detail view (title, subtitle, thumbnail, content)
│ ├── BlogDetail.module.css # Extra styling for blog content
│ ├── FilterBar.jsx # Category filter bar
│ ├── Header.jsx # Navbar / header section
│ ├── Latest_Blogs.jsx # Latest blogs listing
│ ├── Login.jsx # Simple login form
│ ├── ScrollToTop.jsx # Forces scroll to top on route change
│ ├── Temp.jsx # Temporary/testing component
│ ├── TrendingAuthors.jsx # Sidebar with trending authors
│ ├── Wellcome_Part.jsx # Welcome/intro section
│
├── data/ # Static data sources
│ ├── authors.js
│ ├── blog.js
│ ├── comments.js
│ ├── filters.js
│
└── pages/ # Page-level components
├── Home.jsx # Homepage with blog list
└── BlogDetail_page.jsx # Blog detail page wrapper (gradient bg + comments)



---

## ⚙️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/shabd-setu.git
   cd shabd-setu
2. **Install dependencies**
    npm install
3. **Run the development server**
    npm start
4. **Open in browser:**
    http://localhost:3000


## 📸 Screenshots

1. **Home Page**
    ![alt text](<Screenshot 2025-09-18 201614.png>)
    ![alt text](<Screenshot 2025-09-18 201632.png>)
2. **Blog Detail page**
    ![alt text](<Screenshot 2025-09-18 201722.png>)
    ![alt text](<Screenshot 2025-09-18 201817.png>)
    ![alt text](<Screenshot 2025-09-18 201840.png>)