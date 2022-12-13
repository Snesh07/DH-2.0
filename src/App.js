import React from "react";
import "./App.css";
import { HomeScreen } from "./screens/HomeScreen";
import { Contact } from "./screens/Contact";
import { About } from "./screens/About";
import { Service } from "./screens/Service";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/service" element={<Service />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
