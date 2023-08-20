import React from "react";
import "./foodmenu.css"
import All from '../../images/all.png';
import Breakfast from '../../images/breakfast.png';
import Lunch from '../../images/lunch.png';
import Dinner from '../../images/dinner.png';
import { MenuList } from "../../helpers/menu-list";
import { MenuItem } from "../menu-item";
export const FoodMenu=()=>{
    return (
        <div className="main-menu">
            <div className="menu">
            <p className="title">OUR MENU</p>
            <h1 className="menu-title">Wake Up Early,<span> Eat Fresh & Healthy</span></h1>
            <div className="buttons">
            <button><img src={All}/> All</button>
            <button><img src={Breakfast}/> Breakfast</button>
            <button><img src={Lunch}/> Lunch</button>
            <button><img src={Dinner}/> Dinner</button>
            </div>
          <div className="menu-list">
{MenuList.map((menuItem,key)=>{
    return <div>
       <MenuItem
       key={key}
       image={menuItem.image}
       name={menuItem.name}
       price={menuItem.price}
       type={menuItem.type}
       />
    </div>
})}
          </div>
        </div>
        </div>
    )
}