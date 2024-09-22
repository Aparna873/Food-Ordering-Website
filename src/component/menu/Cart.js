import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const removeItem = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateQuantity = (index, newQuantity) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQuantity;

    if (newQuantity === 0) {
      removeItem(index);
    } else {
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    setIsModalOpen(true);
  };

  const handleOrderNow = () => {
    // Logic for placing the order can be added here
    alert('Order placed successfully!');
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
        Your Cart
      </h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center text-lg">Your cart is empty</p>
      ) : (
        <ul className="space-y-6">
          {cartItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg mr-6 object-cover"
                />
                <div>
                  <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                  <p className="text-sm text-gray-500">{item.type}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
              </div>
              <div className="text-right flex items-center">
                <p className="text-gray-900 font-semibold mr-4">Rs. {item.price * item.quantity}</p>
                <button
                  className="text-red-600 hover:text-red-800 font-bold"
                  onClick={() => removeItem(index)}
                >
                  Remove
                </button>
              </div>
              <div className="flex items-center">
                <button
                  className="text-sm bg-gray-200 px-2 py-1 rounded-md mr-2"
                  onClick={() => updateQuantity(index, item.quantity - 1)}
                >
                  -
                </button>
                <button
                  className="text-sm bg-gray-200 px-2 py-1 rounded-md"
                  onClick={() => updateQuantity(index, item.quantity + 1)}
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div className="mt-8 flex justify-between items-center">
          <p className="text-lg font-bold">Total: Rs. {calculateTotal()}</p>
          <button
            className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition duration-300 shadow-md"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <p className="text-lg">Total: Rs. {calculateTotal()}</p>
            <div className="mt-4 flex justify-end">
              <button
                className="px-4 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition duration-300"
                onClick={handleOrderNow}
              >
                Order Now
              </button>
              <button
                className="ml-2 px-4 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition duration-300"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
