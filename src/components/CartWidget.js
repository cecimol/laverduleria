import { useContext } from "react";
import { BsCart3 } from "react-icons/bs";
import { CartContext } from "../context/cartContext";

const CartWidget = () => {
  const { numberOfItemsInCart } = useContext(CartContext);
  const quantity = numberOfItemsInCart();
  return (
    <div style={{ position: "relative" }}>
      <BsCart3 color="white" style={{ width: "30px", height: "30px" }} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: `${quantity < 9 ? "15px" : "20px"}`,
          height: `${quantity < 9 ? "15px" : "20px"}`,
          fontSize: "12px",
          position: "absolute",
          borderRadius: "50%",
          backgroundColor: "red",
          fontWeight: "bold",
          color: "white",
          top: 0,
          left: 20,
        }}
      >
        {quantity}
      </div>
    </div>
  );
};

export default CartWidget;
