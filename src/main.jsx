
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Ensure the root element exists
const rootElement = document.getElementById("root") || (() => {
  const rootDiv = document.createElement("div");
  rootDiv.id = "root";
  document.body.appendChild(rootDiv);
  return rootDiv;
})();

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

