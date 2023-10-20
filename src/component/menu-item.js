import React from "react";
import "./menu-item.css";

export function MenuItem({ image, name, price, type, to }) {
  const handleClick = () => {
    window.location.href = to; // Use window.location.href to navigate to the specified URL.
  };

  return (
    <div className="menuItem" onClick={handleClick}>
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>Rs. {price}</p>
      <p className="type">{type}</p>
    </div>
  );
}

export default MenuItem;
