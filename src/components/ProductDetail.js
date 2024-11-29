import React from "react";
import { useParams, Link } from "react-router-dom";

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

const ProductDetail = () => {
  const { id } = useParams();
  const product = Products.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>{product.name}</h1>
      <img 
        src={product.image} 
        alt={product.name} 
        style={{ width: '300px', height: 'auto', borderRadius: '8px' }} 
      />
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
