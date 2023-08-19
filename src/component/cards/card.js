import React from "react";
import './card.css'
import Order from '../../images/order.jpg';
import Dine from '../../images/dining.jpg';
import Club from '../../images/club.jpg';
import Dessert from '../../images/dessert.jpg';
export const Card=()=>{
    return (
    <div className="Cards">
     <div className="card-img">
      <img src={Order} alt="order-img" />
      <h2>Order Online</h2>
      <span>Stay Home and Order to Your Doorstep</span>
     </div>
     <div className="card-img">
      <img src={Dine} alt="dine-img"/>
      <h2>Dining</h2>
      <span>View the City's Favourite Dining Venues</span>
     </div>
     <div className="card-img">
      <img src={Club} alt="club-img" />
      <h2>Nightlife and Clubs</h2>
      <span>Explore the City's top Nightlife Outlets</span>
     </div>
     <div className="card-img">
      <img src={Dessert} alt="dessert-img" />
      <h2>Dessert and Sweets</h2>
      <span>Dessert is the most crucial part of any meal</span>
     </div>
    </div>
    );
};