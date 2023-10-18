import React from "react";
import { useLocation} from "react-router-dom";
import "../styles/about.css"
import Truck from "./../assets/icons/food_truck.png"
import Food from "./../assets/icons/food.png"
import Time from "./../assets/icons/clock.png"
import { Navbar } from "../component/nav/navbar";
export const About = () => {
//     var location= useLocation();
// console.log(location);
    return (
        <div className="About">
            <Navbar/>
            <div className="heading">
                <h1>We're Passoinate about
                    <br></br>
                    Our Food</h1>
                <p>
                    Our love for food is an unquenchable fire that drives us to explore, experiment, and innovate.
                    It's the flame that ignites our creativity, pushing us to push the boundaries of what's possible.
                    We believe that cooking isn't a mere task; it's an art form, a way of expressing our deepest emotions and desires.
                </p>
            </div>
            <div className="element-container">
                <div className="icon-box-1">
                    <div className="icon">
                        <span className="icon-animation">
                            <img src={Truck} />
                        </span>
                    </div>
                    <div className="icon-text">
                        <h5 className="text">
                            <span>
                                Free Shipping on
                                <br></br>
                                First Order
                            </span>
                        </h5>
                        <p className="para">
                            We believe in making your first experience with us as delightful as possible.
                        </p>
                    </div>
                </div>
                <div className="icon-box-2">
                    <div className="icon">
                        <span className="icon-animation">
                            <img src={Food} />
                        </span>
                    </div>
                    <div className="icon-text">
                        <h5 className="text">
                            <span>
                                Variety of
                                <br></br>
                                Dishes
                            </span>
                        </h5>
                        <p className="para">
                            Life is too short to eat the same dish twice, Explore the world through your taste buds.
                        </p>
                    </div>
                </div>
                <div className="icon-box-3">
                    <div className="icon">
                        <span className="icon-animation">
                            <img src={Time} />
                        </span>
                    </div>
                    <div className="icon-text">
                        <h5 className="text">
                            <span>
                                Thirty Minutes
                                <br></br>
                                Delivery
                            </span>
                        </h5>
                        <p className="para">
                            In the fast-paced world we live in, why wait? Our promise: Thirty minutes or less, right at your doorstep.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};