import { Link } from "react-router-dom";
import { useCartStore } from "../../stores/cart/cart.store";
import "./Cart.css";

const Cart = () => {
  const { cart, deleteItem, clearCart } = useCartStore();

  return (
    <>
      <div className="divListStyle">
        <h2>Cart items: </h2>
        <ul className="listStyle">
          {cart.map((item) => (
            <li key={item.id}>
              {item.title}
              <button className="button" onClick={() => deleteItem(item.id)}>
                Delete item
              </button>
            </li>
          ))}
        </ul>
        <button className="button" onClick={() => clearCart()}>
          Clear items
        </button>
      </div>
    </>
  );
};
export default Cart;
