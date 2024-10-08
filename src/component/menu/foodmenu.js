import React, { useState } from "react";
import "./foodmenu.css";
import All from "../../images/all.png";
import Breakfast from "../../images/breakfast.png";
import Lunch from "../../images/lunch.png";
import Dinner from "../../images/dinner.png";
import { MenuList } from "../../helpers/menu-list";
import EachItem from "./EachItem";

export const FoodMenu = () => {
  //This hook is used to select the menu items which we click
  const [selectedItem, setSelectedItem] = useState(null);
  //This below hook is used to open a box in which menu item will be displayed
  const [isMenuItemOpen, setIsMenuItemOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredMenuItem = MenuList.filter((item) => {
    if (activeCategory === "All") {
      return true;
    } else {
      return item.category === activeCategory;
    }
  });
  //This handleClickedItem function is used to store the item in selected state and open the menu item
  const handleClickedItem = (item) => {
    setSelectedItem(item);
    setIsMenuItemOpen(true);
  }
  //This closeMenuItem is used to close the menu by storing null in a selected state 
  const closeMenuItem = () => {
    setSelectedItem(null);
  }
  return (
    <div className="menu">
      {selectedItem &&
        isMenuItemOpen &&
        (<EachItem item={selectedItem}
          name={selectedItem?.name}
          image={selectedItem?.image}
          price={selectedItem?.price}
          type={selectedItem?.type}
          onClose={closeMenuItem}
        />) // Here we are rendering each menu item using this eachitem compo with it's props
      }
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
      <div className="menu-list" >
        {filteredMenuItem.map((item, key) => (
          // here we are using event listener onClick to click on the menu item and pass this item arguement to this function
          <div key={key} className="menuItem" onClick={() => handleClickedItem(item)}>
            <div style={{ backgroundImage: `url(${item.image})` }}></div>
            <h1>{item.name}</h1>
            <p>Rs. {item.price}</p>
            <p className={item.type === 'Veg' ? 'veg' : 'non-veg'}>{item.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
