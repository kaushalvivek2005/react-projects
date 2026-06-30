# 📑 Technical Project Report: Posts Explorer 
### Fetching and Displaying Posts from DummyJSON API 

**Internship:** YuvaIntern - Web Development   
**Submitted By:** Kaushal Kumar   
**Registration No:** 24030485005   
**Institution:** BIT Sindri, Jharkhand  
**Department:** B.Tech Information Technology (2nd Year) 
**Submission Date:** June 27, 2026  



# 📌 Posts Explorer

A ReactJS application that fetches and displays posts from the **DummyJSON API** using **Axios**. The project demonstrates API integration, state management with React Hooks, reusable components, search functionality, error handling, and responsive design.

---

## 🚀 Features

* Fetch posts from DummyJSON API
* Real-time search functionality
* Read More / Show Less toggle
* Loading indicator during API requests
* Error handling for failed requests
* Reusable React components
* Responsive layout for Desktop, Tablet, and Mobile
* Clean and modular project structure

---

## 🛠️ Tech Stack

* ReactJS
* Vite
* JavaScript (ES6+)
* Axios
* CSS3
* DummyJSON API

---

## 📂 Project Structure

```text
week4-post-explorer/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── SearchBar.jsx
│   │   ├── PostCard.jsx
│   │   ├── Loader.jsx
│   │   └── Error.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── public/
├── package.json
├── vite.config.js
├── README.md
└── WEEK_4_POSTS_EXPLORER_REPORT.pdf
```

---

## 🔗 API Used

**DummyJSON Posts API**

```
https://dummyjson.com/posts
```

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/kaushalvivek2005/react-projects.git
```

Navigate to the project:

```bash
cd react-projects/week4-post-explorer
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

## 📖 Project Workflow

1. React component mounts.
2. `useEffect()` sends an API request.
3. Axios fetches posts from DummyJSON.
4. Data is stored using `useState()`.
5. Posts are rendered dynamically using `posts.map()`.
6. Users can search posts in real time.
7. Each post supports **Read More / Show Less** functionality.

---

## 🎯 Learning Outcomes

* React Components
* React Hooks (`useState`, `useEffect`)
* REST API Integration
* Axios
* State Management
* Conditional Rendering
* Component Reusability
* Responsive Web Design
* Error Handling

---

## 📄 Project Documentation

A detailed project report is included in this repository.

**File:** `WEEK_4_POSTS_EXPLORER_REPORT.pdf`

The report contains:

* Project Overview
* Folder Structure
* API Integration
* Component Explanation
* State Management Flow Diagram
* Screenshots
* Testing Results
* Challenges & Solutions
* Conclusion

---

## 🔮 Future Improvements

* Pagination
* Category-based Filtering
* Dark Mode
* User Authentication
* Comments Section
* Bookmark/Favorite Posts
* Infinite Scrolling

---

## 👨‍💻 Author

**Kaushal Kumar**

B.Tech Information Technology
BIT Sindri, Jharkhand

---

## 📌 Note

This project was developed as part of the **YuvaIntern ReactJS Internship – Week 4 Assignment** for learning and educational purposes.
