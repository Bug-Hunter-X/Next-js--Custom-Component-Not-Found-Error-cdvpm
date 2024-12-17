```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>This is a simple Next.js application.</p>
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js
export default function MyComponent() {
  return (
    <div>
      <p>This is a simple component.</p>
    </div>
  );
}
```