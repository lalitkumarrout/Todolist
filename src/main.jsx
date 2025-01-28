import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TodoContext from "./context/TodoContext.js";

createRoot(document.getElementById("root")).render(<App />);
