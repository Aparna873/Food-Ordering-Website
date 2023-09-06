import React, { useState } from "react";
import "./foodmenu.css"
import All from '../../images/all.png';
import Breakfast from '../../images/breakfast.png';
import Lunch from '../../images/lunch.png';
import Dinner from '../../images/dinner.png';
import { MenuList } from "../../helpers/menu-list";
import MenuItem from "../../component/menu-item";

export const FoodMenu=()=>{
    const [activeCategory,setActiveCategory] =useState('All');
    const filteredMenuItem=MenuList.filter(item=>{
        if(activeCategory==='All')
        {
            return true;
        }
        else
        {
            return item.category===activeCategory;
        }
    });
    const allclicked=()=>{
        setActiveCategory('All');
    }
    const breakfastclicked=()=>{
        setActiveCategory('Breakfast');
    }
    return (
        <div className="main-menu">
            <div className="menu">
            <h1 className="menu-title">Wake Up Early,<span> Eat Fresh & Healthy</span></h1>
          <div className="buttons">
            <button onClick={allclicked}><img src={All}/> All</button>
            <button onClick={breakfastclicked}><img src={Breakfast}/> Breakfast</button>
            <button onClick={() => setActiveCategory('Lunch')}><img src={Lunch}/>Lunch</button>
            <button onClick={() => setActiveCategory('Dinner')}><img src={Dinner}/> Dinner</button>
            </div>
            <div className="menu-list">
                {filteredMenuItem.map((item,key)=>{
                    return <MenuItem 
                    key={key}
                    image={item.image} 
                    name={item.name} 
                    price={item.price} 
                    type={item.type}/>
                })}
            </div>
        </div>
        </div>
    )
}