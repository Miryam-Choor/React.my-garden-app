import React from 'react';

function Flower() {
  const flowerName = "ורד";
  const petalColor = "lightpink";
  const centerColor = "darkred";

  const flowerStyle = {
    backgroundColor: "lightpink",
    color: "darkred",
    padding: '20px',
    margin: '10px',
    borderRadius: '10px',
    display: 'inline-block',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif'
  };

  return (
    <div style={flowerStyle}>
      <h3>{flowerName}</h3>
      <p>צבע עלי כותרת: {petalColor}</p>
      <p>צבע מרכזי: {centerColor}</p>
    </div>
  );
}

export default Flower;