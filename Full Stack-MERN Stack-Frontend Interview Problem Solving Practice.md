# Full Stack / MERN Stack / Frontend Interview Problem Solving Practice

Congratulations on getting selected for the second round 🎉
For a Bangladesh-based software company the 2nd round usually focuses on:

* JavaScript problem solving
* Logic building
* Array/Object manipulation
* React concepts
* API handling
* Async behavior
* DOM understanding
* Full stack thinking
* Small real-world coding tasks

Below is a **Bangladesh market focused list first**, then **global standard interview problems** commonly asked in MERN Stack / Frontend / Full Stack interviews.

---

# 🇧🇩 Bangladesh Company Interview Common Questions

## 1. Reverse a String

```js
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("swapnil"));
```

---

## 2. Check Palindrome

```js
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("madam"));
```

---

## 3. Find Maximum Number in Array

```js
function findMax(arr) {
  return Math.max(...arr);
}

console.log(findMax([10, 50, 90, 12]));
```

---

## 4. Remove Duplicate from Array

```js
function removeDuplicate(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicate([1,1,2,3,3,4]));
```

---

## 5. Count Vowels

```js
function countVowels(str) {
  let count = 0;
  const vowels = "aeiou";

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("JavaScript"));
```

---

## 6. FizzBuzz

```js
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
```

---

## 7. Find Even Numbers

```js
function getEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

console.log(getEvenNumbers([1,2,3,4,5,6]));
```

---

## 8. Capitalize First Letter

```js
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalize("swapnil"));
```

---

## 9. Sort Array Ascending

```js
function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(sortArray([5,2,8,1]));
```

---

## 10. Factorial

```js
function factorial(n) {
  if (n === 0) return 1;

  return n * factorial(n - 1);
}

console.log(factorial(5));
```

---

# 🇧🇩 Bangladesh Frontend Interview Real Scenario Questions

## 11. Debounce Function

```js
function debounce(fn, delay) {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
```

---

## 12. Fetch API Data

```js
async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
```

---

## 13. Array Map Practice

```js
const users = [
  { name: "John", age: 25 },
  { name: "Alex", age: 30 }
];

const names = users.map(user => user.name);

console.log(names);
```

---

## 14. Filter Products

```js
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 15000 }
];

const expensive = products.filter(p => p.price > 20000);

console.log(expensive);
```

---

## 15. Reduce Total Price

```js
const cart = [
  { price: 100 },
  { price: 200 },
  { price: 300 }
];

const total = cart.reduce((acc, item) => acc + item.price, 0);

console.log(total);
```

---

# 🌍 Global MERN Stack Interview Problems

## 16. Two Sum

```js
function twoSum(arr, target) {
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];

    if (map[complement] !== undefined) {
      return [map[complement], i];
    }

    map[arr[i]] = i;
  }
}

console.log(twoSum([2,7,11,15], 9));
```

---

## 17. Flatten Array

```js
function flattenArray(arr) {
  return arr.flat(Infinity);
}

console.log(flattenArray([1,[2,[3,4]]]));
```

---

## 18. Deep Copy Object

```js
const user = {
  name: "Swapnil",
  address: {
    city: "Dhaka"
  }
};

const copy = structuredClone(user);

console.log(copy);
```

---

## 19. Promise Example

```js
const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

promise
  .then(res => console.log(res))
  .catch(err => console.log(err));
```

---

## 20. Async Await Interview Question

```js
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
```

---

# ⚛️ React Interview Common Problems

## 21. Counter App

```jsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

---

## 22. Search Filter

```jsx
import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");

  const users = ["John", "Alex", "David"];

  const filtered = users.filter(user =>
    user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />

      {
        filtered.map((user, index) => (
          <p key={index}>{user}</p>
        ))
      }
    </div>
  );
}
```

---

# 🔥 Very Important JavaScript Interview Topics

## Must Practice

### Array Methods

* map
* filter
* reduce
* find
* some
* every
* sort

---

### JavaScript Concepts

* Closure
* Hoisting
* Scope
* Event Loop
* Callback
* Promise
* Async Await
* Debounce
* Throttle

---

### React Topics

* useState
* useEffect
* Props
* Lifting State Up
* Conditional Rendering
* API Fetching
* Custom Hooks
* Context API

---

### MERN Stack Topics

* REST API
* CRUD
* JWT Authentication
* MongoDB Query
* Express Middleware
* Role Based Authentication
* File Upload
* Pagination

---

# 🎯 Most Common Live Coding Tasks in Bangladesh

These are VERY common in local software company interviews:

| Problem             | Difficulty |
| ------------------- | ---------- |
| Reverse String      | Easy       |
| Palindrome          | Easy       |
| Remove Duplicate    | Easy       |
| Todo App            | Medium     |
| Counter App         | Easy       |
| API Fetching        | Medium     |
| Search Filter       | Medium     |
| CRUD App            | Medium     |
| Debounce Search     | Medium     |
| Authentication Flow | Medium     |
| Pagination          | Medium     |
| Drag and Drop       | Medium     |
| Cart Calculation    | Medium     |
| Form Validation     | Medium     |

---

# 🚀 Final Preparation Strategy

## Daily Practice Plan

### Day 1

* Array methods
* String problems

### Day 2

* Promise + Async Await
* Fetch API

### Day 3

* React small apps

### Day 4

* CRUD API
* Authentication

### Day 5

* Mock interview
* Time-based solving

---

# 🔥 Most Important Advice for Second Round

Interviewers usually check:

* Problem solving approach
* Clean code
* Communication
* Debugging skill
* Confidence
* JavaScript fundamentals

Even if solution is not perfect:

* Explain logic clearly
* Write clean variable names
* Think aloud
* Don't panic

---

# 🌍 Best Platforms for Practice

* [LeetCode](https://leetcode.com?utm_source=chatgpt.com)
* [HackerRank](https://www.hackerrank.com?utm_source=chatgpt.com)
* [Codewars](https://www.codewars.com?utm_source=chatgpt.com)
* [Frontend Mentor](https://www.frontendmentor.io?utm_source=chatgpt.com)
* [JavaScript.info](https://javascript.info?utm_source=chatgpt.com)

---

# ⭐ High Priority Questions Before Interview

Practice these 100%:

1. map/filter/reduce
2. Promise + async await
3. Reverse string
4. Remove duplicate
5. Debounce
6. API fetch
7. React state update
8. Search filter
9. CRUD logic
10. JWT authentication flow

These are extremely common for MERN Stack interviews in Bangladesh right now.
