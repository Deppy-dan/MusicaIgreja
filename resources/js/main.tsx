import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/resources/js/App.tsx'; // Caminho correto para o componente
import '@/index.css'; // Estilos globais

// Obtém ou cria a div root
const rootElement = document.getElementById("root");
if (!rootElement) {
  const rootDiv = document.createElement("div");
  rootDiv.id = "root";
  document.body.appendChild(rootDiv);
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

