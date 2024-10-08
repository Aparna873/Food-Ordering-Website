import { useState } from 'react';
import { useCart } from '../context/CartContextProvider';
import './menu-item.css';

function EachItem({ image, name, price, type, onClose }) {
  const [quantity, setQuantity] = useState(0);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  // When Add to Cart is clicked
  const handleAddToCartClick = () => {
    setQuantity(1);
    setIsAdding(true);
  };

  // Function to increase the quantity of item
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Function to decrease the quantity of item
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Function to add the item with the selected quantity to the cart
  const handleAddToCart = async () => {
    const item = { image, name, price, type };
    await addToCart(item, quantity); // Use the Firestore integration here
    setIsAdding(false);
    setQuantity(0);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-800 opacity-70"></div>

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
              <span
                className={`ml-2 inline-block px-2 py-1 rounded-full text-sm font-bold uppercase ${
                  type === 'Veg'
                    ? 'bg-green-100 text-green-600'
                    : 'bg-red-100 text-red-600'
                }`}
              >
                {type}
              </span>
            </h2>
            <p className="text-lg font-bold mb-2">Rs. {price}</p>
          </div>
          {isAdding ? (
            <>
              <div className="flex items-center justify-center my-4">
                <button
                  onClick={handleDecreaseQuantity}
                  className="bg-gray-200 text-gray-600 px-4 py-2 rounded-l transition duration-300 hover:bg-gray-300"
                >
                  -
                </button>
                <span className="px-6 py-2 border-t border-b">{quantity}</span>
                <button
                  onClick={handleIncreaseQuantity}
                  className="bg-gray-200 text-gray-600 px-4 py-2 rounded-r transition duration-300 hover:bg-gray-300"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out"
              >
                Add
              </button>
            </>
          ) : (
            <button
              onClick={handleAddToCartClick}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out"
            >
              Add To Cart
            </button>
          )}
          <button
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out mt-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default EachItem;
