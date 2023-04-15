import { createContext, useState, useEffect, useReducer } from "react";
import cartReducer from "./cart-reducer";

export const CartContext = createContext({
  isCartOpen: false,
  cartShownHandler: () => {},
  cartItems: [],
  addItemToCart: () => {},
  clearItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [cart, dispatch] = useReducer(cartReducer, {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
  });

  useEffect(() => {
    let total = 0;
    let count = 0;

    cart?.cartItems?.forEach((cartItem) => {
      total += Number(cartItem.price) * Number(cartItem.quantity);
      count += Number(cartItem.quantity);
    });

    setCartCount(count);
    setCartTotal(total);
  }, [cart]);

  const addItemToCart = (productToAdd) => {
    dispatch({ type: "ADD_CART_ITEM", productToAdd });
  };

  const clearItemFromCart = (cartItemToClear) => {
    dispatch({ type: "CLEAR_CART_ITEMS", cartItemToClear });
  };

  const cartShownHandler = () => {
    setIsCartOpen((prev) => !prev);
  };

  const value = {
    isCartOpen,
    cartShownHandler,
    addItemToCart,
    clearItemFromCart,
    cartItems: cart.cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
