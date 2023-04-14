import { createContext, useState, useEffect, useReducer } from "react";
import cartReducer from "./cart-reducer";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [cart, dispatch] = useReducer(cartReducer, {
    cartItems: [],
  });

  // useEffect(() => {
  //   if (cart?.cartItems?.length > 0) {
  //     const newCartCount = cart.cartItems.reduce(
  //       (total, cartItem) => total + cartItem.quantity,
  //       0
  //     );
  //     setCartCount(newCartCount);
  //   }
  // }, [cart]);

  // useEffect(() => {
  //   const newCartTotal = cart.cartItems.reduce(
  //     (total, cartItem) => total + cartItem.quantity * cartItem.price,
  //     0
  //   );
  //   setCartTotal(newCartTotal);
  // }, [cart]);

  const addItemToCart = (productToAdd) => {
    dispatch({ type: "ADD_CART_ITEM", productToAdd });
  };

  const removeItemToCart = (cartItemToRemove) => {
    dispatch({ type: "REMOVE_CART_ITEM", cartItemToRemove });
  };

  const clearItemFromCart = (cartItemToClear) => {
    dispatch({ type: "CLEAR_CART_ITEMS", cartItemToClear });
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartItems: cart.cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
