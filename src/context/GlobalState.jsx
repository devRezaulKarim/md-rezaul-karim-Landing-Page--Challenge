/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
// src/contexts/CartContext.js
import { createContext, useState, useContext } from "react";

// Create the context
const CartContext = createContext();

// Define the provider component
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems((prevItems) => {
      const isAlreadyInCart = prevItems.find(
        (preItem) => preItem.id === item.id
      );
      if (isAlreadyInCart) {
        return prevItems.map((prevItem) => {
          if (prevItem.id === item.id) {
            return {
              ...prevItem,
              quantity: prevItem.quantity + 1,
            };
          }
          return prevItem;
        });
      } else {
        return [
          ...prevItems,
          {
            ...item,
            quantity: 1,
          },
        ];
      }
    });
  };

  const removeItemFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, removeItemFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for using the Cart context
const useCart = () => {
  return useContext(CartContext);
};

export { CartProvider, useCart };
