import {useContext, useState } from 'react';
import CartContext from "./cartContext";

export const useCart = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  
  const removeFromCart = (item) => {
    setCartItems((prevItems) => 
      prevItems.filter((cartItem) => cartItem.name !== item.name)
    );
  };

  const addToCart = (item, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (cartItem) => cartItem.name === item.name
      );

      if (existingItemIndex !== -1) {
        // If the item already exists, update the quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        return updatedItems;
      } else {
        // If the item is new, add it to the cart with the specified quantity
        return [...prevItems, { ...item, quantity }];
      }
    });
  };
  const clearCart =()=>{
    setCartItems([]);
  }

  return (
    <CartContext.Provider value={{ cartItems, setCartItems,addToCart, removeFromCart,clearCart}}>
      {children}
    </CartContext.Provider>
  );
};