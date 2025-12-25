# Learning React

## What is React?
React is a JavaScript library for building user interfaces. It lets you create reusable components that update when data changes, without reloading the whole page.

I'm learning React because it's one of the most popular tools for web development and helps build modern, interactive websites.

---

## What I've Learned

### 1. JSX
JSX is how we write HTML inside JavaScript. It looks like HTML but it's actually JavaScript.

Why I need this: Without JSX, writing UI code would be really messy. JSX makes it clean and easy to read.

Basic example:
```javascript
function MyComponent() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
```

Important things:
- Need one parent element wrapping everything
- Use `className` not `class`
- Close all tags properly

---

### 2. Props
Props let me pass data from one component to another, like passing arguments to a function.

Why I need this: So I can reuse the same component with different data instead of writing the same code over and over.

Example:
```javascript
function Greeting(props) {
  return <h1>Hello {props.name}</h1>;
}

// Use it:
<Greeting name="Deepss" />
<Greeting name="Suman" />
```

---

### 3. useState
This is a hook that lets components remember things and update when something changes.

Why I need this: To make my components interactive. Like buttons that count clicks, toggles that switch on/off, etc.

Example:
```javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
```

The pattern is always: `const [variable, setVariable] = useState(starting value)`


##Things i build as a practice
 Counter - buttons to increase/decrease numbers
 LikeCounter - emoji reaction buttons with separate counters
