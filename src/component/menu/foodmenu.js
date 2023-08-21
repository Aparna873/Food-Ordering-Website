import React, { useState } from "react";
import "./foodmenu.css"
import All from '../../images/all.png';
import Breakfast from '../../images/breakfast.png';
import Lunch from '../../images/lunch.png';
import Dinner from '../../images/dinner.png';
import { MenuList } from "../../helpers/menu-list";
import { MenuItem } from "../menu-item";
export const FoodMenu=()=>{
    const [activeCategory,setActiveCategory] =useState('All');
    const filteredMenuItem=MenuList.filter(item=>{
        if(activeCategory==='all')
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
            <p className="title">OUR MENU</p>
            <h1 className="menu-title">Wake Up Early,<span> Eat Fresh & Healthy</span></h1>
          <main>
          <div className="buttons">
            <button onClick={allclicked}><img src={All}/> All</button>
            <button onClick={breakfastclicked}><img src={Breakfast}/> Breakfast</button>
            <button onClick={() => setActiveCategory('Lunch')}><img src={Lunch}/>Lunch</button>
            <button onClick={() => setActiveCategory('Dinner')}><img src={Dinner}/> Dinner</button>
            <div>
                {filteredMenuItem.map(item=>(
                   <h1>{item.name}</h1>
                ))}
            </div>
            </div>
          </main>
        </div>
        </div>
    )
}