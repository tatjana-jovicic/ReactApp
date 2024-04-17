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
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
        <button onClick={() => clearCart()}>Clear items</button>
      </div>

      {/* <div className="container">
        <p className="count_of_post">
          Number of posts in cart:{" "}
          <span className="number">{numberOfItems}</span>
        </p>
        <div className="button_container">
          <button className="button_cart" onClick={() => removeOneIteminCart()}>
            Remove one item
          </button>
          <button className="button_cart" onClick={() => resetCart()}>
            Reset cart
          </button>
        </div>
        <div className="box_item">
          {startCart.map((item, index) => (
            <div className="item" key={index}>
              <p>
                <span>ID:</span> {item.id}
              </p>
              <p>
                <span>Title:</span> {item.title}
              </p>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
};
export default Cart;
