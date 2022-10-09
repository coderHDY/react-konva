import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const url = "/api";
fetch(url)
.then((res) => res.json())
.then((res) => {
  console.log("---", res);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
