import { useNavigate } from "react-router-dom";
import "./styles/CartIcon.css";
import { useOrderStore } from "../../../stores/order/order.store";

const CartIcon = () => {
  const router = useNavigate();
  const { order } = useOrderStore();

  const handleClickCart = () => {
    router("/orders");
  };

  return (
    <div className="cart_icon" onClick={() => handleClickCart()}>
      <span>{order.length}</span>
      <img
        src="https://cdn.iconscout.com/icon/free/png-256/free-shopping-cart-1433158-1211836.png?f=webp"
        alt="Cart Icon"
      />
    </div>
  );
};
export default CartIcon;
