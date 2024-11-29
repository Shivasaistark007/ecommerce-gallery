import React, { useState } from "react";
import { Link } from "react-router-dom";

const Products = [
  { 
    id: 1, 
    name: "ESP32", 
    price: 30, 
    category: "Electronics", 
    image: "https://adiy.in/wp-content/uploads/2024/03/1-2.jpg",
    description: "ESP32 is a series of low-cost, low-power system-on-chip microcontrollers with integrated Wi-Fi and dual-mode Bluetooth."
  },
  { 
    id: 2, 
    name: "Wings of Fire", 
    price: 20, 
    category: "Books", 
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1588286863i/634583.jpg", 
    description: "Wings ofFire is a compelling and inspirational autobiography of A.P.J.Abdul Kalam, authored by Arun Tiwari. The book is divided into three  parts, each chronicling significant phases of Kalam's life, his achievements, and his contributions to science and technology in India."
  },
  { 
    id: 3, 
    name: "Arduino", 
    price: 50, 
    category: "Electronics", 
    image: "https://images-cdn.ubuy.co.in/633ab164bf38c1247013d806-arduino-uno-rev3-a000066.jpg", 
    description: "Arduino UNO is a low-cost, flexible, and easy-to-use programmable open-source microcontroller board that can be integrated into a variety of electronic projects."
  },
  { 
    id: 4, 
    name: "Black Shirt", 
    price: 50, 
    category: "Clothing", 
    image: "https://thehouseofrare.com/cdn/shop/products/IMG_0051_b737999f-ecab-49b8-886c-7d2782b9fe82.jpg?v=1708340584", 
    description: "Black solid opaque Casual shirt ,has a spread collar, button placket, long regular sleeves, curved hem."
  },
];

const ProductGallery = () => {
  const [products, setProducts] = useState(Products);
  const [filter, setFilter] = useState("");

  const handleSort = (type) => {
    const sortedProducts = [...products];

    if (type === "priceLowHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (type === "priceHighLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setProducts(sortedProducts);
  };

  const handleFilter = (category) => {
    setFilter(category);
  };

  const filteredProducts = filter
    ? products.filter((product) => product.category === filter)
    : products;

  return (
    <div style={{ background: "#f9f9f9", padding: "20px", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center" }}>Product Gallery</h1>

      {/* Filter Section */}
      <div style={{ marginBottom: "10px", textAlign: "center" }}>
        <button onClick={() => handleFilter("")}>All</button>
        <button onClick={() => handleFilter("Electronics")}>Electronics</button>
        <button onClick={() => handleFilter("Books")}>Books</button>
        <button onClick={() => handleFilter("Clothing")}>Clothing</button>
      </div>

      {/* Sort Section */}
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <button onClick={() => handleSort("priceLowHigh")}>Price (Low to High)</button>
        <button onClick={() => handleSort("priceHighLow")}>Price (High to Low)</button>
      </div>

      {/* Product List */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {filteredProducts.map((product) => (
          <div 
            key={product.id} 
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              width: "200px",
              padding: "10px",
              background: "#fff",
              textAlign: "center",
            }}
          >
            <img 
              src={product.image} 
              alt={product.name} 
              style={{ 
                width: "100%", 
                height: "150px", 
                objectFit: "cover", 
                borderRadius: "8px" 
              }} 
            />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
