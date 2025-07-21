import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "15px", margin: "10px" }}>
      <img
        src={product.imageUrl || "placeholder.jpg"}
        alt={product.name}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Condition: {product.condition}</p>
    </div>
  );
};

export default ProductCard;
