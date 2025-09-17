import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./index.css"; // global styles
import "./styles/chat.scss"; // chat UI styles

// React 18 root API
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
