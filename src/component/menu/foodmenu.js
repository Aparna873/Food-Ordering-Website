import React, { useState, useEffect } from "react";
import "./foodmenu.css";
import All from "../../images/all.png";
import Breakfast from "../../images/breakfast.png";
import Lunch from "../../images/lunch.png";
import Dinner from "../../images/dinner.png";
import { MenuList } from "../../helpers/menu-list";
import EachItem from "./EachItem";

export const FoodMenu = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); 
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  // Save cart items to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    const existingItemIndex = cart.findIndex(cartItem => cartItem.name === item.name);
  
    if (existingItemIndex > -1) {
      // Update the quantity of the existing item
      cart[existingItemIndex].quantity += item.quantity;
    } else {
      // Add the new item with its quantity
      cart.push(item);
    }
  
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const handleDialogOpen = (item) => {
    setSelectedItem(item);
    setIsDialogOpen(true);
  };


  const filteredMenuItem = MenuList.filter((item) => {
    if (activeCategory === "All") {
      return true;
    } else {
      return item.category === activeCategory;
    }
  });

  return (
    <div className="main-menu">
      {isDialogOpen && selectedItem && (
        <EachItem
          image={selectedItem.image}
          name={selectedItem.name}
          price={selectedItem.price}
          type={selectedItem.type}
          onClose={() => setIsDialogOpen(false)}
          onAddToCart={addToCart}
        />
      )}  
      <div className="menu">
        <h1 className="menu-title">
          Wake Up Early,<span> Eat Fresh & Healthy</span>
        </h1>
        <div className="buttons">
          <button onClick={() => setActiveCategory("All")}>
            <img src={All} alt="All" /> All
          </button>
          <button onClick={() => setActiveCategory("Breakfast")}>
            <img src={Breakfast} alt="Breakfast" /> Breakfast
          </button>
          <button onClick={() => setActiveCategory("Lunch")}>
            <img src={Lunch} alt="Lunch" /> Lunch
          </button>
          <button onClick={() => setActiveCategory("Dinner")}>
            <img src={Dinner} alt="Dinner" /> Dinner
          </button>
        </div>
       
        <div className="menu-list">
          {filteredMenuItem.map((item, key) => (
            <div
              key={key}
              className="menuItem"
              onClick={() => handleDialogOpen(item)} 
            >
              <div style={{ backgroundImage: `url(${item.image})` }}></div>
              <h1>{item.name}</h1>
              <p>Rs. {item.price}</p>
              <p className={item.type === 'Veg' ? 'veg' : 'non-veg'}>{item.type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
