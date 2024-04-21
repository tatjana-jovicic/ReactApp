import "./styles/ItemsInCart.css";
import { useOrderStore } from "../../../stores/order/order.store";
import Bin from "../../../assets/bin.png";

const ItemsInCart = () => {
  const { order, deleteItem, clearOrder, countPrice } = useOrderStore();
  return (
    <div>
      <h2 className="your_items">Your items </h2>
      <div className="lists_items">
        {order.map((item) => (
          <div className="list_item" key={item.id}>
            <img className="image" src={item.image} alt={item.title} />
            <span className="title">{item.title}</span>
            <span className="price">${item.price}</span>
            <img
              src={Bin}
              className="bin"
              onClick={() => deleteItem(item.id)}
            />
          </div>
        ))}
      </div>
      <p className="total_price">Total price for all items: ${countPrice}</p>
      <button className="butt1" onClick={() => clearOrder()}>
        Clear order
      </button>
    </div>
  );
};
export default ItemsInCart;
