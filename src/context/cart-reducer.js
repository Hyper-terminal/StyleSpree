const cartReducer = (state, action) => {
  const { type } = action;
  if (action.type === "ADD_CART_ITEM") {
    const { productToAdd } = action;
    const existingCartItem = state.cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
      return state.cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }

    return [...state.cartItems, { ...productToAdd, quantity: 1 }];
  }

  if (type === "REMOVE_CART_ITEM") {
    const { cartItemToRemove } = action;
    // find the cart item to remove
    var existingCartItem = state.cartItems.find(
      (cartItem) => cartItem.id === cartItemToRemove.id
    );

    // check if quantity is equal to 1, if it is remove that item from the cart

    if (existingCartItem.quantity === 1) {
      return state.cartItems.filter(
        (cartItem) => cartItem.id !== cartItemToRemove.id
      );
    }

    // return back cartitems with matching cart item with reduced quantity
    return state.cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
  if (type === "CLEAR_CART_ITEMS") {
    const { cartItemToClear } = action;
    return state.cartItems.filter(
      (cartItem) => cartItem.id !== cartItemToClear.id
    );
  }

  return state;
};

export default cartReducer;