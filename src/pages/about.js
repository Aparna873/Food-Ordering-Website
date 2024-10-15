import React from "react";
import "../styles/about.css";
import Truck from "./../assets/icons/food_truck.png";
import Food from "./../assets/icons/food.png";
import Time from "./../assets/icons/clock.png";

export const About = () => {
  return (
    <div className="About px-4 lg:px-24 py-10">
      <div className="heading text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-6">
          We're Passionate about
          <br />
          Our Food
        </h1>
        <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-600 max-w-lg mx-auto">
          Our love for food is an unquenchable fire that drives us to explore,
          experiment, and innovate. It's the flame that ignites our creativity,
          pushing us to push the boundaries of what's possible. We believe that
          cooking isn't a mere task; it's an art form, a way of expressing our
          deepest emotions and desires.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-center mt-10 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex flex-col items-center w-full lg:w-96 text-center">
          <div className="icon-animation">
            <img src={Truck} alt="Free Shipping" />
          </div>
          <h5 className="text-xl md:text-2xl font-semibold mt-3">
            Free Shipping on
            <br />
            First Order
          </h5>
          <p className="mt-4 text-sm md:text-base text-gray-600">
            We believe in making your first experience with us as delightful as
            possible.
          </p>
        </div>

        <div className="flex flex-col items-center w-full lg:w-96 text-center">
          <div className="icon-animation">
            <img src={Food} alt="Variety of Dishes" />
          </div>
          <h5 className="text-xl md:text-2xl font-semibold mt-3">
            Variety of
            <br />
            Dishes
          </h5>
          <p className="mt-4 text-sm md:text-base text-gray-600">
            Life is too short to eat the same dish twice. Explore the world
            through your taste buds.
          </p>
        </div>

        <div className="flex flex-col items-center w-full lg:w-96 text-center">
          <div className="icon-animation">
            <img src={Time} alt="Thirty Minutes Delivery" />
          </div>
          <h5 className="text-xl md:text-2xl font-semibold mt-3">
            Thirty Minutes
            <br />
            Delivery
          </h5>
          <p className="mt-4 text-sm md:text-base text-gray-600">
            In the fast-paced world we live in, why wait? Our promise: Thirty
            minutes or less, right at your doorstep.
          </p>
        </div>
      </div>
    </div>
  );
};
