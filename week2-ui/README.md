# 🚀 React UI Component Library - Week 2 Submission

**Course:** YuvaIntern Web Development Internship  
**Submitted By:** Kaushal Kumar  
**Registration No:** 24030485005  
**Institution:** BIT Sindri, Jharkhand  
**Department:** B.Tech Information Technology (2nd Year)  
**Submission Date:** June 13, 2026  

---

## 📌 Project Overview
This repository contains the **Week 2 Assignment** for the YuvaIntern Web Development Internship. Moving forward from the foundational configuration in Week 1, this week focuses on building a highly modular, responsive, and accessible **React UI Component Library** from scratch without using any third-party UI frameworks (like Tailwind or Material UI).

The project implements **5 core production-ready components**:
1. **Button Component** - Supporting multiple sizes, variants, loading states, and full keyboard focus.
2. **Input Component** - Supporting 7 data types, custom error states, a dynamic character counter, and toggleable password fields.
3. **Card Component** - Complete with lazy-loading images, skeleton loader states, and multiple layout themes.
4. **Modal Component** - Implemented via React Portals with an advanced accessibility focus trap and focus restoration.
5. **Form Component** - Built with FormContext API to handle centralized validations and real-time error mapping across inputs.

---

## 🛠️ Tech Stack Used
* **React 18** - Functional components with custom hooks and context tracking.
* **Vite** - High-speed build tool and development bundler (migrated from Week 1's CRA proposal for faster performance).
* **CSS Modules** - For encapsulated, component-scoped styling to prevent global style leaks.
* **FormContext API** - For state management and validation propagation.
* **PropTypes** - Enforcing strict runtime property validation.

---

## 🗂️ Updated Project Directory
```text
react-project/week2-ui
|   ├── public/
|   └── src/
│       ├── Components/
│       |   ├── Button/
│       |   │   ├── Button.jsx
│       |   │   └── Button.module.css
│       |   ├── Card/
│       |   │   ├── Card.jsx
│       |   │   └── Card.module.css
|       |   ├── Form/
│       |   |   ├── Form.jsx
|       |   |   ├── FormContext.jsx
|       |   |   ├── FormField.jsx
|       |   |   ├── FormField.module.css
│       |   |   ├── Form.module.css
|       |   |   └── Index.js
|       |   ├── Input/
│       |   │   ├── Input.jsx
│       |   │   └── Input.module.css
│       |   └── Modal/
│       |       ├── Modal.jsx
│       |       └── Modal.module.css
│       |    
│       ├── App.jsx                 
│       └── main.jsx
├── package.json
├── package_lock.json
└── README.md

