import { useContext } from "react";
import Card from "../UI/Card";
import { CartContext } from "../../context/cart/cart-context";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <Card
      style={{
        position: "fixed",
        zIndex: "50",
        background: "white",
        top: "20%",
        left: "50%",
        transform: "translateX(-50%)",
        maxHeight: "70%",
        width: "50%",
        padding: "1rem",
      }}
    >
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      {cartItems?.map((item) => (
        <h1>{item.productName}</h1>
      ))}
    </Card>
  );
};

export default Cart;
