import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/heading/Header";
import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
