import React from 'react';

const ProductDetail = ({ match }) => {
  const productId = match.params.id;

 
  const productDetails = {
    id: 1,
    name: 'boAt Rockerz 510 Super Extra Bass Bluetooth Headset',
    image: 'boat_h1.jpg',
    price: 1489.25,
    comments: [
      { id: 1, text: 'Great product!', user: 'Aditya Jadhav' },
      { id: 2, text: 'I love it!', user: 'Akash Jadhav' },
    ],
  };


  const handleAddToCart = () => {
   
    console.log(`Product with ID ${productId} added to cart!`);
  };

  return (
    <div className="product-detail-container">
      <img src={productDetails.image} alt={productDetails.name} className="product-image" />
      <h2>{productDetails.name}</h2>
      <p>Price: ₹{productDetails.price}</p>

      <h3>Comments:</h3>
      <ul>
        {productDetails.comments.map((comment) => (
          <li key={comment.id}>
            {comment.user}: {comment.text}
          </li>
        ))}
      </ul>

      <button className="add-to-cart-button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
