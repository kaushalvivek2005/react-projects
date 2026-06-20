# 📑 Technical Project Report: Components Props Documentation

**Internship:** YuvaIntern - Web Development [cite: 4]  
**Submitted By:** Kaushal Kumar [cite: 4]  
**Registration No:** 24030485005 [cite: 4]  
**Institution:** BIT Sindri, Jharkhand [cite: 4]  
**Department:** B.Tech Information Technology (2nd Year) [cite: 4]  
**Submission Date:** June 13, 2026  

---

## 1. Executive Summary
This document serves as the authoritative technical report for the Week 2 deliverables. The primary objective of this week was to transition from the project planning phase into implementing a production-ready, highly reusable, and accessible React UI Component Library. 

The library consists of 5 core components designed using functional paradigms, CSS Modules for scoped styling, and strict runtime type assertions via `PropTypes`.

---

## 2. Component Properties (Props API) Documentation

### 2.1 Button Component
A flexible button atom that supports custom variations, sizing, and loading states.

| Prop Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `label` | `string` | *Required* | The primary text or label to display inside the button. |
| `variant` | `enum` | `'primary'` | Visual style scheme: `'primary'`, `'secondary'`, `'danger'`, or `'outline'`. |
| `size` | `enum` | `'medium'` | Sizing scale: `'small'`, `'medium'`, or `'large'`. |
| `isLoading` | `bool` | `false` | When true, renders an animated spinner and disables user interaction. |
| `disabled` | `bool` | `false` | Standard HTML disabled attribute to stop interaction and dim styles. |
| `onClick` | `func` | `undefined` | Callback function triggered when the button is clicked. |

---

### 2.2 Input Component
A dynamic form control element with state validation, character counters, and icon alignments.

| Prop Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `name` | `string` | *Required* | Unique identifier name for the input field. |
| `type` | `string` | `'text'` | Renders standard types: `text`, `password`, `email`, `number`, `tel`, `url`, `date`. |
| `label` | `string` | `''` | Form field label displayed above or inline with the input box. |
| `placeholder`| `string` | `''` | Temporary instructional text displayed when the field is empty. |
| `error` | `string` | `''` | Error message string. Passing a value automatically flags the field with error styling. |
| `maxLength` | `number` | `undefined` | Defines maximum character threshold and activates the real-time character counter. |
| `showPasswordToggle` | `bool` | `false` | If true (only for `type="password"`), adds an interactive eye icon to unmask text. |

---

### 2.3 Card Component
A layout content-container supporting placeholder animations and lazy-loaded image targets.

| Prop Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | *Required* | Bold heading text placed at the top of the card block. |
| `description`| `string` | `''` | Core context or descriptive body text of the card item. |
| `imageUrl` | `string` | `''` | Source endpoint link for the card image asset (supports async lazy-loading). |
| `variant` | `enum` | `'default'` | Frame border/shadow styles: `'default'`, `'outlined'`, or `'elevated'`. |
| `isLoading` | `bool` | `false` | Swaps out text and imagery layouts with an animated skeleton loader structure. |
| `clickable` | `bool` | `false` | Enables cursor pointer transitions, elevation lift, and hover effects. |

---

### 2.4 Modal Component
An overlay dialog box injected cleanly into the document DOM root using React Portals.

| Prop Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `isOpen` | `bool` | *Required* | Toggles the overlay active mounting state (visible or hidden). |
| `onClose` | `func` | *Required* | Event handler callback triggered when clicking the backdrop or pressing Escape. |
| `title` | `string` | `''` | Optional header string rendered at the top of the modal viewport. |
| `children` | `node` | *Required* | Custom nested layout elements or components to be wrapped inside the modal body. |

---

### 2.5 Form Component
A semantic wrapper utilizing the React Context API to manage and distribute form states to children.

| Prop Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `onSubmit` | `func` | *Required* | Custom submit event mapping that returns compiled field values after validation check. |
| `children` | `node` | *Required* | Nested inputs, cards, or button children elements wrapped by the `FormContext` scope. |

---

## ♿ Accessibility Compliance Notes (WCAG 2.1 AA)

To align with standard web accessibility benchmarks, specialized scripts and native strategies were woven directly into the code layer:

1. **Focus Locking:** When a `Modal` dialog layer updates to open, keyboard focus jumps immediately to the context container. It remains trapped using an active key loop—users pressing `Tab` can never leave the modal elements until it is dismissed.

2. **Escape Closure:** Active modal elements seamlessly append event listeners directly onto the window framework, executing the designated `onClose` property sequence as soon as the physical `Escape` key is registered.

3. **Screen Reader Identifiers:** Custom dynamic parameters link validation errors seamlessly with their target inputs using strict `aria-describedby` structures, ensuring screen readers audibly dictate error feedback.