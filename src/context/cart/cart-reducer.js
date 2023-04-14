const cartReducer = (state, action) => {
  const { type } = action;

  if (action.type === "ADD_CART_ITEM") {
    const { productToAdd } = action;
    const { cartItems } = state;

    const existingCartItem = cartItems.find(
      (cartItem) =>
        Number(cartItem.productproductId) ===
        Number(productToAdd.productproductId)
    );

    if (existingCartItem) {
      return cartItems.map((cartItem) =>
        Number(cartItem.productproductId) ===
        Number(productToAdd.productproductId)
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }

  if (type === "REMOVE_CART_ITEM") {
    const { cartItemToRemove } = action;
    // find the cart item to remove
    var existingCartItem = state.cartItems.find(
      (cartItem) =>
        cartItem.productproductId === cartItemToRemove.productproductId
    );

    // check if quantity is equal to 1, if it is remove that item from the cart

    if (existingCartItem.quantity === 1) {
      return state.cartItems.filter(
        (cartItem) => cartItem.productId !== cartItemToRemove.productId
      );
    }

    // return back cartitems with matching cart item with reduced quantity
    return state.cartItems.map((cartItem) =>
      cartItem.productId === cartItemToRemove.productId
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
  if (type === "CLEAR_CART_ITEMS") {
    const { cartItemToClear } = action;
    return state.cartItems.filter(
      (cartItem) => cartItem.productId !== cartItemToClear.productId
    );
  }

  return state;
};

export default cartReducer;
