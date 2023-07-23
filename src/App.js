
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ProductCard from './ProductCard';



const products = [
  {
    id: 1,
    name: 'boAt Rockerz 510 Super Extra Bass Bluetooth Headset...',
    image: 'boat_h1.jpg',
    price: 19.99 // I add price in doller
  },
  {
    id: 2,
    name: 'SpinBot Ranger HX300 Bluetooth Gaming Headphon...',
    image: 'sp_1.jpg',
    price: 24.99
  },
  {
    id: 3,
    name: 'UPOZA P47 Bluetooth Headset  (Black, On the Ear)...',
    image: 'UPOZA_1.jpg',
    price: 12.99
  },
  {
    id: 4,
    name: 'HOPPUP SONIC with 20 Hours Play Time Bluetooth ...',
    image: 'hoppup_1.jpg',
    price: 29.99
  }
];

function App() {
  return (
    <div className="App">
      <Navbar/>

      <h1><center>HEADPHONES</center></h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
