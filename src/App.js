import "./App.css";
import React from "react";
import HomePage from "./pages/HomePage";
import AppBar from "./components/Appbar/index";
import Footer from "./components/Footer/index";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div>
      <AppBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
