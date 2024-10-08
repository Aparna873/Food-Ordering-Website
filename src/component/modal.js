import React from 'react';

const Modal = ({ totalPrice, onClose, onOrder }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Checkout</h2>
        <p className="text-lg text-center mb-6">Total Price: Rs. {totalPrice}</p>
        <div className="flex justify-between">
          <button
            onClick={onOrder}
            className="bg-green-500 text-white px-4 py-2 mx-5 rounded hover:bg-green-600 transition-colors duration-200"
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
};

export default Modal;
