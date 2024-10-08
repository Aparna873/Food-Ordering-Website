import { useContext, useState, useEffect } from 'react';
import CartContext from "./cartContext";
import { db } from '../../firebase-config';// Adjust the import path as necessary
import { doc, setDoc, getDoc, deleteDoc } from 'firebase/firestore';

export const useCart = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const userId = getCurrentUserId(); // Implement this function to get the logged-in user's ID

  useEffect(() => {
    const fetchCartItems = async () => {
      const docRef = doc(db, 'users', userId, 'cart', 'cartItems');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setCartItems(docSnap.data().items || []);
      }
    };

    if (userId) {
      fetchCartItems();
    }
  }, [userId]);

  const removeFromCart = async (item) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((cartItem) => cartItem.name !== item.name);
      updateFirestoreCart(updatedItems); // Update Firestore
      return updatedItems;
    });
  };

  const addToCart = async (item, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (cartItem) => cartItem.name === item.name
      );

      let updatedItems;

      if (existingItemIndex !== -1) {
        // If the item already exists, update the quantity
        updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
      } else {
        // If the item is new, add it to the cart with the specified quantity
        updatedItems = [...prevItems, { ...item, quantity }];
      }
      updateFirestoreCart(updatedItems); // Update Firestore
      return updatedItems;
    });
  };

  const clearCart = async () => {
    setCartItems([]);
    updateFirestoreCart([]); // Clear Firestore cart
  };

  const updateFirestoreCart = async (items) => {
    const docRef = doc(db, 'users', userId, 'cart', 'cartItems');
    await setDoc(docRef, { items }, { merge: true });
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
