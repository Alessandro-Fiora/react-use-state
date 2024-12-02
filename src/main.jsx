import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Bootstrap and custom CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/index.css";

// Bootstrap JS
import * as bootstrap from "bootstrap";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
