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
      //checking the items already in cart or not, if the item is already in cart then just increase the quantity
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

  const increaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      })
    );
  };

  const decreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      })
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
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
