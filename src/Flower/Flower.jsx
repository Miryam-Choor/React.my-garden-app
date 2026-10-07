import React from 'react';
import './Flower.css'

function Flower() {
  const flowerName = "ורד";
  const petalColor = "pink";
  const centerColor = "darkred";

  const petalStyle = {
    backgroundColor: petalColor
  };

  const centerStyle = {
    backgroundColor: centerColor
  };

  const nameStyle = {
    color: centerColor
  };

  const handleClick = () => {
    alert(`אני פרח מסוג ${flowerName}`);
  };

  return (
    <div className="flower-container" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="flower-shape">
        <div className="flower-center" style={centerStyle}></div>
        <div className="petal petal-top" style={petalStyle}></div>
        <div className="petal petal-bottom" style={petalStyle}></div>
        <div className="petal petal-left" style={petalStyle}></div>
        <div className="petal petal-right" style={petalStyle}></div>
      </div>

      <div className="flower-name" style={nameStyle}>
        {flowerName}
      </div>
    </div>
  );
}


export default Flower;