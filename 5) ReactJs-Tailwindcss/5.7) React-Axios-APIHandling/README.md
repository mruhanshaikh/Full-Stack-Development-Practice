# React API Fetching Demo
# Live : https://dynamicolorblog.netlify.app/

This project demonstrates how to fetch data from an API in a React application and render it dynamically in the UI. It also explores key React concepts such as state management, mapping data to components, using Axios for HTTP requests, and applying dynamic inline styles.

## 📌 Project Overview

In this project, a React component fetches user data from an external API and displays each user’s name and email in styled cards. Each card receives a randomly generated background color during render, demonstrating how dynamic styles can be applied in React.

The main learning objective of this project is to understand how data flows from an API to the React UI.

---

## 🚀 Concepts Learned

### 1. Fetching Data from an API in React

The project shows how to send an HTTP request to an API endpoint and retrieve data inside a React component.

Workflow:

1. User clicks a button.
2. The React component sends a request to the API.
3. The API returns JSON data.
4. The data is stored in React state.
5. The UI re-renders and displays the data.

---

### 2. Why Axios is Used Instead of Fetch

Although the native `fetch()` API can retrieve data, Axios offers several advantages:

* Automatically converts JSON responses
* Cleaner and shorter syntax
* Better error handling
* Supports request/response interceptors
* Works consistently across browsers

Example:

Axios:

```javascript
const response = await axios.get(url);
setData(response.data);
```

Fetch:

```javascript
const response = await fetch(url);
const data = await response.json();
setData(data);
```

Axios reduces boilerplate and simplifies API calls.

---

### 3. Managing API Data with React State

React state (`useState`) is used to store the API response.

When the state updates, React automatically re-renders the UI.

Example:

```javascript
const [blog, setBlog] = useState([]);
```

After fetching:

```javascript
setBlog(response.data);
```

React then updates the UI with the new data.

---

### 4. Extracting and Rendering Data in the UI

The API returns an array of objects. Each object contains properties such as:

* name
* email
* id

To render each item, the array is transformed using `map()`.

```javascript
blog.map((user) => (
  <div key={user.id}>
    <h1>{user.name}</h1>
    <p>{user.email}</p>
  </div>
))
```

`map()` converts the array of data into an array of React elements that can be rendered.

---

### 5. Why Objects Cannot Be Rendered Directly in React

React can only render:

* strings
* numbers
* React elements
* arrays of React elements

A plain JavaScript object cannot be rendered because React doesn't know which property should be displayed.

For example, this will **not work**:

```javascript
<h1>{user}</h1>
```

Instead, specific properties must be accessed:

```javascript
<h1>{user.name}</h1>
```

---

### 6. Dynamic Inline Styling in React

This project demonstrates how inline styles can be used to generate random background colors for each card.

Example:

```javascript
style={{
  backgroundColor: `rgb(
    ${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)}
  )`
}}
```

Every render generates a new color, creating visually distinct cards.

---

### 7. Why the `key` Prop is Required

When rendering lists in React using `map()`, each element must have a unique `key`.

Example:

```javascript
<div key={user.id}>
```

The key help React:

* identify which elements changed
* efficiently update the DOM
* prevent unnecessary re-renders

Without a key, React will show a warning and performance may decrease.

The key is applied to the **top-level element inside the map**, which in this case is the `div`.

---

## 🧠 Key Takeaways

* React fetches data from APIs using HTTP requests.
* Axios simplifies API communication compared to fetch.
* API responses are stored in React state.
* The `map()` function converts data into UI elements.
* Objects cannot be rendered directly in JSX.
* Inline styles can dynamically generate UI effects.
* The `key` prop is required for efficient list rendering.

---

## 🛠 Technologies Used

* React
* Axioss
* JavaScript (ES6+)
* JSX
* Tailwind CSS

---

## 📚 API Used

The project uses a public testing API:

https://jsonplaceholder.typicode.com/users

This API provides mock user data useful for learning and experimentation.

---

## 🎯 Learning Outcome

By completing this project, you gain practical experience in:

* Integrating APIs with React
* Managing asynchronous data
* Rendering dynamic UI components
* Understanding React’s rendering behavior