import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import RegisterProvider from "./components/contexts/register";
import LoginProvider from "./components/contexts/login";
import HeaderProvider from "./components/contexts/header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <HeaderProvider>
      <RegisterProvider>
        <LoginProvider>
          <App />
        </LoginProvider>
      </RegisterProvider>
    </HeaderProvider>
  </Router>
);
