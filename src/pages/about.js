import React from "react";
import "../styles/about.css"
import Truck from "./../assets/icons/food_truck.png"
import Food from "./../assets/icons/food.png"
import Time from "./../assets/icons/clock.png"
import { Navbar } from "../component/nav/navbar";
export const About = () => {
    return (
        <div className="About">
          
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
            <div className="flex flex-row mx-24 mt-10 justify-center">
                <div className="flex flex-col w-96 m-5">
                    <div className="flex justify-center">
                        <span className="icon-animation">
                            <img src={Truck} />
                        </span>
                    </div>
                    <div className="flex flex-col mt-3">
                        <h5 className="text-2xl ">
                            <span>
                                Free Shipping on
                                <br></br>
                                First Order
                            </span>
                        </h5>
                        <p className="mt-4">
                            We believe in making your first experience with us as delightful as possible.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col w-96 mt-5">
                    <div className="flex justify-center">
                        <span className="icon-animation">
                            <img src={Food} />
                        </span>
                    </div>
                    <div className="flex flex-col mt-3">
                        <h5 className="text-2xl">
                            <span>
                                Variety of
                                <br></br>
                                Dishes
                            </span>
                        </h5>
                        <p className="mt-4">
                            Life is too short to eat the same dish twice, Explore the world through your taste buds.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col w-96 mt-5">
                    <div className="flex justify-center">
                        <span className="icon-animation">
                            <img src={Time} />
                        </span>
                    </div>
                    <div className="flex flex-col mt-3">
                        <h5 className="text-2xl">
                            <span>
                                Thirty Minutes
                                <br></br>
                                Delivery
                            </span>
                        </h5>
                        <p className="mt-4">
                            In the fast-paced world we live in, why wait? Our promise: Thirty minutes or less, right at your doorstep.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};