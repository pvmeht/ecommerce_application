import React from 'react';

const exchangeRate = 74.50; 

const ProductCard = ({ product }) => {
  const priceInRupees = (product.price * exchangeRate).toFixed(2); // bcz my prices are in dollar so convert it into indian rupees

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{priceInRupees}</p>
      <button className="buy-button">Buy</button> 
    </div>
  );
};

export default ProductCard;
