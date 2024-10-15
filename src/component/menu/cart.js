import React, { useState, useCallback } from 'react';
import { useCart } from '../context/CartContextProvider.jsx'; // Adjust the import based on your file structure
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const { cartItems, setCartItems, removeFromCart, clearCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle the removal of an item
  const handleRemove = useCallback((item) => {
    removeFromCart(item);
  }, [removeFromCart]);

  const handleIncrease = (item) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const handleDecrease = (item) => {
    setCartItems((prevItems) =>
      prevItems.reduce((acc, cartItem) => {
        if (cartItem.name === item.name) {
          if (cartItem.quantity > 1) {
            acc.push({ ...cartItem, quantity: cartItem.quantity - 1 });
          }
        } else {
          acc.push(cartItem);
        }
        return acc;
      }, [])
    );
  };

  // Calculate total price of all items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Function to handle order placement
  const handleOrder = () => {
    toast.success('Your order is placed!', {
      position: 'top-center',
      autoClose: 3000, // Duration for the toast
    });
    setIsModalOpen(false);
    clearCart();
  };

  // Modal component
  const Modal = ({ totalPrice, onClose, onOrder }) => (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4 text-center">Checkout</h2>
        <p className="text-lg text-center mb-6">Total Price: Rs. {totalPrice}</p>
        <div className="flex justify-between">
          <button
            onClick={onOrder}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-200"
          >
            Order
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 bg-white shadow-md rounded-lg mt-10 sm:px-6 lg:px-8">
      {(!cartItems || cartItems.length === 0) ? (
        <p className="text-center text-gray-500 text-lg">No items in the cart</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-between p-4 mb-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center flex-1 w-full md:w-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-20 object-cover rounded-md mr-4"
                />
                <div className="flex flex-col justify-center w-full">
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    {item.type.toLowerCase() === 'non-veg' && (
                      <span className="ml-2 text-red-500 font-bold">Non-Veg</span>
                    )}
                    {item.type.toLowerCase() === 'veg' && (
                      <span className="ml-2 text-green-600 font-bold">Veg</span>
                    )}
                  </div>
                  <p className="text-gray-600">Rs. {item.price}</p>
                  <p className="text-gray-800 font-semibold">Total: Rs. {item.price * item.quantity}</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 md:mt-0 md:ml-4">
                <div className="flex items-center border border-gray-300 rounded">
                  <button
                    className="bg-gray-300 text-gray-800 px-3 py-1 rounded-l hover:bg-gray-400 transition-colors duration-200"
                    onClick={() => handleDecrease(item)}
                  >
                    -
                  </button>
                  <span className="mx-3 font-semibold">{item.quantity}</span>
                  <button
                    className="bg-gray-300 text-gray-800 px-3 py-1 rounded-r hover:bg-gray-400 transition-colors duration-200"
                    onClick={() => handleIncrease(item)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="ml-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200"
                  onClick={() => handleRemove(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="flex flex-col md:flex-row justify-between items-center mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4 md:mb-0">Total Price: Rs. {totalPrice}</h3>
            <button 
              onClick={() => setIsModalOpen(true)} 
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
      {isModalOpen && (
        <Modal 
          totalPrice={totalPrice} 
          onClose={() => setIsModalOpen(false)} 
          onOrder={handleOrder} 
        />
      )}
      <ToastContainer />
    </div>
  );
};

export default Cart;
