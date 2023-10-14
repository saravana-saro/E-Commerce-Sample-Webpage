import React, { useState } from 'react';
import Product from './Product';
import Header from './Header';

const HomePage = () => {
  const [cartCount, setCartCount] = useState(0);
  const [products] = useState([
    { id: 1, name: 'Amazon', description: "India's biggest online store." },
    { id: 2, name: 'Flibkart', description: "India's biggest online store." },
    { id: 3, name: 'Zomato', description: 'Indian multinational food delivery.'},
  ]);

  const addToCart = (product) => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className='store'>
      <Header cartCount={cartCount} />
      <h1>Welcome to our Online Store</h1>
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
