import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductGallery from "./components/ProductGallery";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductGallery />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
