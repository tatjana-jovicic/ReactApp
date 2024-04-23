import "./styles/ItemsInCart.css";
import { useOrderStore } from "../../../stores/order/order.store";
import Bin from "../../../assets/bin.png";
// import Plus from "../../../assets/plusSign.png";
// import Minus from "../../../assets/minusSign.jpg";
// import { useNavigate } from "react-router-dom";

const ItemsInCart = () => {
  // const router = useNavigate();
  const { order, removeItemFromOrderCart, clearOrderCart } = useOrderStore();

  const total = order.reduce(
    (acc, item) => acc + item.totalPrice * item.quantity,
    0
  );

  // const handleOrder = () => {
  //   // Here you can implement the logic to send the order to the backend
  //   // and clear the cart
  //   clearOrderCart();
  //   router("/items");
  // };

  const itemTotalPrice = (item) => {
    const totalItemPrice = item.price * item.quantity;
    return totalItemPrice.toFixed(2); //js f-ja koja zaokruzi da dvije decimale
  };

  return (
    <div>
      {order.length ? (
        <>
          <h1 className="title">Items in Cart</h1>
          <div className="items_cart">
            {order.map((item) => (
              <div key={item.id} className="item_in_cart">
                <img className="item_image" src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <div className="quantity">
                  <p>${itemTotalPrice(item)}</p>
                  <div>
                    <span>- </span>
                    <span>{item.quantity}</span>
                    <span> +</span>
                  </div>
                </div>
                <img
                  onClick={() => removeItemFromOrderCart(item.id)}
                  className="trash_bin"
                  src={Bin}
                  alt="Trash Bin Icon"
                />
              </div>
            ))}
            <p className="total_price">
              Total price for all items: ${total.toFixed(2)}
            </p>
            <button className="order_button" onClick={() => clearOrderCart()}>
              Order
            </button>
          </div>
        </>
      ) : (
        <h2>No items in cart</h2>
      )}
    </div>

    // <div>
    //   <h2 className="your_items">Your items </h2>
    //   <div className="lists_items">
    //     {order.map((item) => (
    //       <div className="list_item" key={item.id}>
    //         <img className="image" src={item.image} alt={item.title} />
    //         <span className="title">{item.title}</span>
    //         <span className="price">${itemTotalPrice(item)}</span>

    //         <img
    //           src={Bin}
    //           className="bin"
    //           onClick={() => removeItemFromOrderCart(item.id)}
    //         />
    //       </div>
    //     ))}
    //   </div>
    //   <p className="total_price">
    //     Total price for all items: ${total.toFixed(2)}
    //   </p>
    //   <button className="butt1" onClick={() => clearOrderCart()}>
    //     Clear order
    //   </button>
    // </div>
  );
};
export default ItemsInCart;
