import { useNavigate } from "react-router-dom";
import "./styles/CartIcon.css";
import { useOrderStore } from "../../../stores/order/order.store";
import CarttIcon from "../../../assets/cart.webp";

const CartIcon = () => {
  const router = useNavigate();
  const { order } = useOrderStore();

  const handleClickCart = () => {
    router("/orders");
  };

  return (
    <div className="cart_icon" onClick={() => handleClickCart()}>
      <span>{order.length}</span>
      <img src={CarttIcon} alt="Cart Icon" />
    </div>
  );
};
export default CartIcon;
