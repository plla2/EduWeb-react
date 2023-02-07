import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/heading/Header";
import Home from "./components/home/Home";
import "./App.css";
import About from "./components/about/About";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
