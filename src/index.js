import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import UserProvider from "./storage/UserProvider";
import GradebookProvider from "./storage/GradebookProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <GradebookProvider>
        <BrowserRouter>
          <Header />
          <App />
        </BrowserRouter>
      </GradebookProvider>
    </UserProvider>
  </React.StrictMode>
);
