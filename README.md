reference: https://github.com/CodeWith-Karthik/ReactJs-Templates

https://www.youtube.com/watch?v=RjRXJGbC8cA&t=1324s


# React

React is a popular JavaScript library for building **user interfaces**, especially **single-page applications**. It allows developers to create reusable UI components and manage complex UI states efficiently.

---

# `useState`

`useState` is one of the **React Hooks** that lets you add **state** to functional components.


I have learned something about useState done by counter app

## React Counter App using useState Hook

**Syntax to use useState**

const [count, setCount] = useState(0);

 
* `count` is the current state value.
* `setCount` is the function used to update the value.
* `0` is the initial value.

---

### About this Project

I created a simple **Counter App** using React and the `useState` hook. Here's what the app does:

* Displays a **counter value** on the screen.
* Has three buttons:

  * 🔼 **Increment** button → increases the count by 1
  * 🔽 **Decrement** button → decreases the count by 1
  * 🔄 **Reset** button → resets the count back to 0
* Uses **event handlers(user defined functions)** (`handleIncrement`, `handleDecrement`, `handleReset`) to update the counter using `setCount`.

---

###  What I Learned

* How to use the `useState` hook in React.
* How to handle user interaction using event handlers.
* How to create and update state in a React component.

---

### Screenshots
![Counter App Screenshot](counter-app-useState.png)
![Counter App Screenshot](counter-app2.png)
![Counter App Screenshot](counter-app3.png)


---

## Another Example-- React Cart App using useState Hook

### About this project

I built a **Shopping Cart App** using React and the `useState` hook. It uses a mock dataset to simulate a real product cart. Here's what the app can do:



*  Displays the **total number of products** in the cart.
*  Lists all products with name and price.
* ️ Each product has a **Delete** button to remove it from the cart.
* A **Delete All** button clears the entire cart.
* ️ A **Reset** button restores all products from the original dataset.

---



Each product has:

```js
{
  id: Number,
  name: String,
  price: Number
}
```

---

### What I Learned

* How to use `useState` to store and update lists.
* How to use `map(), filter()` to delete specific items.
* How to manage multiple states in one component.
* How to import and use mock data from external files.

---



### Screenshot 

![Cart App Screenshot](cartapp1-useState.png)
![Cart App Screenshot](cart-app2.png)
![Cart App Screenshot](cart-app3.png)

---


# useEffect

`useEffect` is a React hook that lets you perform **side effects** in your components. Side effects are tasks like:

- Fetching data from an API
- Setting up timers or intervals
- Manipulating the DOM manually

`useEffect` runs some code **after** the component renders. It also allows you to clean up those side effects when the component is removed from the screen, which helps avoid memory leaks.

---
## React Toggle Project
### About This Project


- Using `useState` to show or hide a component (`DemoComponent`) when a button is clicked.
- Using `useEffect` inside `DemoComponent` to start a timer that logs a message every second.
- Cleaning up the timer automatically when `DemoComponent` is hidden (unmounted).

---

### screenshot

![Cart App Screenshot](toggle1-useEffect.png)
![Cart App Screenshot](toggle2.png)

---
 
 ## GitHub Users App

This React project displays a list of GitHub users using the GitHub public API. It uses **`useEffect`** and **`useState`** hooks to fetch and manage data, and includes a simple loading UI for better user experience.

---


### ️ About this project

- Fetches a list of GitHub users from the GitHub API.
- Displays each user's:
  - Avatar image
  - GitHub username
  - Profile link
- Adds a 3-second delay before fetching data (simulating loading time).
- Shows a **"Loading..."** message while data is being fetched.

---


### screenshot

![Cart App Screenshot](github-user-useEffect.png)

---

# Add to cart -simple project

### About the project
- A form to add product name and price.
- Products are listed in the cart after adding.
- Buttons to delete each item and clear the entire cart.
-  Total products shown on top.
- Count updates automatically on add/delete.
- "Cart is Empty" shown when no items.

The Cart component is already there. I have used in this project.

---

# useRef

`useRef` is a React hook that returns a mutable ref object whose `.current` property is initialized with the passed argument (`initialValue`). This object persists for the full lifetime of the component.

### Purpose
- To **access and interact with DOM elements** directly in a React component.
- To **store mutable values** that persist across renders **without causing re-renders** when updated.
- To **keep track of previous state or values** inside a component without triggering a UI update.

---