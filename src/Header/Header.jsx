import React from 'react';
import '../index.css'; 

function Header() {
  return (
    <header className="main-header">
      <h1>הגינה שלי</h1>
      <img src={require('./garden.jpg')} alt="Garden" className="header-img" />
    </header>
  );
}

export default Header;