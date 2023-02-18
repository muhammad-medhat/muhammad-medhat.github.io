import React, { useState } from "react";

import "./App.css";
import { Card, Row, Col, Image, ListGroup, Form } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./home.js";
import PortfolioItemDetails from "./portfolioItem-details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomeScreen />} />
          <Route path="/:name" exact element={<PortfolioItemDetails />} />
        </Routes>
      </BrowserRouter>
      {/* <!-- row --> */}
    </div>
  );
}

export default App;
