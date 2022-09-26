import "./App.css";
import React from "react";
import Register from "./components/Register";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </div>
  );
}

export default App;
