import React from 'react';

const Header = ({ cartCount }) => {
  return (
    <header>
      <h1>Online Store</h1>
      <div className="cart-icon">
        <i className="shopping-cart"></i>
        <span className="cart-count">{cartCount}</span>
      </div>
    </header>
  );
};

export default Header;
