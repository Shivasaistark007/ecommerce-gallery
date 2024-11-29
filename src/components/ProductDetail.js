import React from "react";
import { useParams, Link } from "react-router-dom";

const Products = [
    { 
        id: 1, 
        name: "ESP32", 
        price: 30, 
        category: "Electronics", 
        image: "https://adiy.in/wp-content/uploads/2024/03/1-2.jpg" 
      },
      { 
        id: 2, 
        name: "Wings of Fire", 
        price: 20, 
        category: "Books", 
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1588286863i/634583.jpg" 
      },
      { 
        id: 3, 
        name: "Arduino", 
        price: 50, 
        category: "Electronics", 
        image: "https://images-cdn.ubuy.co.in/633ab164bf38c1247013d806-arduino-uno-rev3-a000066.jpg" 
      },
      { 
        id: 4, 
        name: "Black Shirt", 
        price: 50, 
        category: "Clothing", 
        image: "https://thehouseofrare.com/cdn/shop/products/IMG_0051_b737999f-ecab-49b8-886c-7d2782b9fe82.jpg?v=1708340584" 
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = Products.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div style={{ background: "#f9f9f9", padding: "20px", minHeight: "100vh" }}>
      <h1>{product.name}</h1>
      <img 
        src={product.image} 
        alt={product.name} 
        style={{ width: "300px", height: "300px", objectFit: "cover", borderRadius: "8px" }}
      />
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>Description: {product.description}</p>
      <Link to="/">Back to Gallery</Link>
    </div>
  );
};

export default ProductDetail;
