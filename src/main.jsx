import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Скрипты из script.js
document.addEventListener("DOMContentLoaded", () => {
  const balls = document.querySelectorAll(".b-ball_bounce");
  balls.forEach((ball, index) => {
    setTimeout(() => {
      ball.classList.add("active");
    }, index * 500);
  });
});

// Создаем root для рендеринга приложения
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
