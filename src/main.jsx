import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Routing
import { BrowserRouter } from "react-router-dom";

// Axios
import axios from "axios";
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Rendering
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
