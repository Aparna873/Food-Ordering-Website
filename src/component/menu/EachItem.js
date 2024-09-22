import React, { useState } from "react";
import './menu-item.css';

function EachItem({ image, name, price, type, onClose, onAddToCart }) {
  const [quantity, setQuantity] = useState(0); // Start with 0 (not added yet)

  const handleAddToCart = () => {
    if (quantity === 0) {
      setQuantity(1);
      onAddToCart({ image, name, type, price, quantity: 1 });
    } else {
      increaseQuantity(); // Increase quantity if already added
    }
  };

  const handleAdd = () => {
    if (quantity > 0) {
      onClose(); // Close the modal only when the "Add" button is clicked
    }
  };

  const increaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onAddToCart({ image, name, type, price, quantity: newQuantity });
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onAddToCart({ image, name, type, price, quantity: newQuantity });
    } else if (quantity === 1) {
      setQuantity(0); // Reset to 0 when decreased to 1
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-800 opacity-70" onClick={onClose}></div>

      <div className="relative w-full max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden">
        <div
          className="w-full h-60 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
        ></div>

        <div className="bg-white p-4 flex flex-col justify-between">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-400 hover:text-red-600 transition duration-300"
          >
            ✖
          </button>

          <div className="text-center">
            <h2 className="text-xl font-semibold mt-2 flex justify-center items-center">
              {name}
              <span className={`ml-2 inline-block px-2 py-1 rounded-full text-sm font-bold uppercase ${type === "Veg" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                {type}
              </span>
            </h2>
            {/* Rating Stars */}
            <div className="flex items-center justify-center mt-1">
              {/* SVG stars here... */}
            </div>
            <p className="text-lg font-bold mb-2">Rs. {price}</p>
          </div>

          <div className="mt-2 flex justify-center items-center space-x-2">
            {quantity === 0 ? (
              <button
                onClick={handleAddToCart}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold shadow-md hover:bg-blue-600 active:scale-95 transition duration-200"
              >
                Add to Cart
              </button>
            ) : (
              <div className="flex items-center space-x-2">
                <button
                  onClick={decreaseQuantity}
                  className="px-2 py-1 bg-gray-300 text-gray-700 rounded-lg shadow-md hover:bg-gray-400 active:scale-95 transition duration-200"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className="px-2 py-1 bg-gray-300 text-gray-700 rounded-lg shadow-md hover:bg-gray-400 active:scale-95 transition duration-200"
                >
                  +
                </button>
              </div>
            )}
          </div>

          <div className="mt-2 flex justify-between space-x-2">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2  bg-gray-300 text-gray-800 rounded-lg font-semibold shadow-md hover:bg-gray-400 active:scale-95 transition duration-200"
            >
              Close
            </button>
            {quantity > 0 && (
              <button
                onClick={handleAdd}
                className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold shadow-md hover:bg-blue-600 active:scale-95 transition duration-200"
              >
                Add
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EachItem;
