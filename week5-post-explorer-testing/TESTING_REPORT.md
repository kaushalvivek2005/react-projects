# 📑 Technical Testing Report

## Posts Explorer
### Week 5 – Testing, Debugging, and Code Quality Assurance

**Internship:** YuvaIntern – ReactJS Development

**Submitted By:** Kaushal Kumar

**Registration No:** 24030485005

**Institution:** BIT Sindri, Jharkhand

**Department:** B.Tech Information Technology (2nd Year)

**Submission Date:** July 2026

---

# 📌 Project Overview

Posts Explorer is a ReactJS application developed during the YuvaIntern ReactJS Internship. The application fetches posts from the DummyJSON API using Axios and provides users with features such as searching posts, viewing post details, loading indicators, and error handling.

The objective of Week 5 was not to add new features, but to improve the application's reliability through testing, debugging, and code quality assurance. Automated testing was implemented to verify that every important component behaves correctly under different scenarios.

---

# 🎯 Objectives

The objectives of this assignment were:

- Integrate a modern testing framework with the React application.
- Write unit tests for reusable React components.
- Perform integration testing for the complete application.
- Verify API interactions using mocked responses.
- Improve code reliability and maintainability.
- Ensure proper debugging and quality assurance practices.

---

# 🛠 Tech Stack

The application was developed using the following technologies:

- ReactJS
- Vite
- JavaScript (ES6+)
- Axios
- CSS3
- DummyJSON API

---

# 🧪 Testing Tools

The following tools and libraries were used for automated testing:

- **Vitest** – Fast testing framework designed for Vite projects.
- **React Testing Library** – Used to render React components and verify their behavior from the user's perspective.
- **Jest DOM Matchers** – Provides additional assertions such as `toBeInTheDocument()` and `toHaveTextContent()`.
- **User Event Library** – Simulates real user interactions such as typing and clicking.

These tools provide a reliable environment for testing modern React applications.

---

# 📂 Project Structure

```text
week5-post-explorer-testing/

│
├── src/
│
├── components/
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── Loader.jsx
│   ├── Error.jsx
│   └── PostCard.jsx
│
├── services/
│   └── api.js
│
├── tests/
│   ├── Navbar.test.jsx
│   ├── Loader.test.jsx
│   ├── Error.test.jsx
│   ├── SearchBar.test.jsx
│   ├── PostCard.test.jsx
│   └── App.test.jsx
│
├── setupTests.js
├── App.jsx
├── App.css
├── package.json
├── vite.config.js
└── TESTING_REPORT.md
```

---

# 🧪 Testing Strategy

The application was tested using two different testing approaches.

## 1. Unit Testing

Each React component was tested individually to verify that it renders correctly and behaves as expected.

Components tested:

- Navbar
- Loader
- Error
- SearchBar
- PostCard

Each component was isolated from the rest of the application to ensure independent verification.

---

## 2. Integration Testing

Integration testing was performed on the App component to verify the interaction between multiple components.

The following scenarios were tested:

- Loading state
- Successful API response
- Failed API response
- Rendering of fetched posts
- Component interaction

---

# ✅ Test Cases Implemented

| Component | Test Cases |
|-----------|-----------:|
| Navbar    |      3     |
| Loader    |      2     |
| Error     |      2     |
| SearchBar |      2     |
| PostCard  |      3     |
| App       |      3     |

**Total Test Cases:** **15**

---

# 📋 Component Testing Details

## Navbar Component

The following checks were performed:

- Verified that the Navbar component renders successfully.
- Verified that the heading "Post Explorer" is displayed.
- Verified that the navigation element exists.

---

## Loader Component

The following checks were performed:

- Verified that the loading message is displayed.
- Verified that the heading is rendered correctly.

---

## Error Component

The following checks were performed:

- Verified that the error heading is displayed.
- Verified that the error message received through props is rendered correctly.

---

## SearchBar Component

The following checks were performed:

- Verified that the search input field is rendered.
- Verified that typing in the input correctly triggers the search function.

---

## PostCard Component

The following checks were performed:

- Verified that the post title is displayed.
- Verified that the Read More button is rendered.
- Verified that clicking the button changes the text to Show Less.

---

## App Component

The following checks were performed:

- Verified that the loader appears while data is being fetched.
- Verified that posts are rendered after a successful API response.
- Verified that the error component is displayed when the API request fails.

---

# 🔄 API Mocking

The application normally fetches data from the DummyJSON API using Axios.

During testing, real API calls were replaced with mocked responses using **Vitest's `vi.mock()`**.

Three different scenarios were tested:

- Successful API response
- Failed API response
- Loading state

Mocking eliminates dependency on the internet, improves testing speed, and ensures consistent test results.

---

# 🐞 Debugging Process

Several issues were identified and resolved during testing.

### Issue 1

**Problem**

No test files were detected by Vitest.

**Solution**

Created properly named `.test.jsx` files inside the `tests` directory.

---

### Issue 2

**Problem**

Incorrect relative import paths caused component loading errors.

**Solution**

Updated component import paths correctly.

---

### Issue 3

**Problem**

Some components required props during rendering.

**Solution**

Mock props were supplied during testing to simulate real application behavior.

---

### Issue 4

**Problem**

API requests made tests dependent on network availability.

**Solution**

Implemented API mocking using `vi.mock()` to simulate successful and failed responses.

---

# 📊 Test Results

The automated testing process produced the following results:

| Category          | Result |
|-------------------|--------|
| Test Files        |   6    |
| Total Test Cases  |   15   |
| Passed            |   15   |
| Failed            |    0   |

All test cases passed successfully, confirming that the application's UI components and business logic behave correctly under different conditions.

---

# 🎓 Learning Outcomes

This project helped in understanding and implementing:

- React Component Testing
- Unit Testing
- Integration Testing
- API Mocking
- User Interaction Testing
- Event Testing
- Debugging Techniques
- React Testing Library
- Vitest
- Code Quality Assurance

---

# 🚀 Future Improvements

The application can be further improved by implementing:

- Snapshot Testing
- Code Coverage Reports
- End-to-End Testing using Cypress
- Accessibility Testing
- Performance Testing
- Continuous Integration using GitHub Actions

---

# ✅ Conclusion

The Week 5 assignment successfully enhanced the reliability and maintainability of the Posts Explorer application through automated testing and debugging.

A total of **15 automated test cases** were implemented using **Vitest** and **React Testing Library**. These tests validated individual UI components, user interactions, API behavior, and the overall application workflow.

The project provided practical experience in modern frontend testing methodologies and demonstrated the importance of testing in building dependable and maintainable React applications.

---

# 👨‍💻 Author

**Kaushal Kumar**

B.Tech Information Technology

BIT Sindri, Jharkhand

---

## 📌 Note

This project was completed as part of the **YuvaIntern ReactJS Internship – Week 5 Assignment**. The focus of this assignment was on implementing testing, debugging, and code quality assurance using **Vitest** and **React Testing Library**.
