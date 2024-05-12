import "./styles/ItemsInCart.css";
import { useOrderStore } from "../../../stores/order/order.store";
import Bin from "../../../assets/bin.png";
import Plus from "../../../assets/plusSign.png";
import Minus from "../../../assets/minusSign.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Snackbar } from "@mui/material";

const ItemsInCart = () => {
  const [isRemoved, setIsRemoved] = useState(false);
  const [isSuccessOrder, setIsSuccessOrder] = useState(false);
  const router = useNavigate();

  const {
    order,
    removeItemFromOrderCart,
    clearOrderCart,
    incrementNumberOfOrder,
    decrementNumberOfOrder,
  } = useOrderStore();

  const total = order.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleOrder = () => {
    // Here can implement the logic to send the order to the backend
    // and clear the cart
    clearOrderCart();
    setIsSuccessOrder(true);
    setTimeout(() => {
      router("/items");
    }, 3000);
  };

  const itemTotalPrice = (item) => {
    const totalItemPrice = item.price * item.quantity;
    return totalItemPrice.toFixed(2);
  };

  const removeItem = (id) => {
    removeItemFromOrderCart(id);
    setIsRemoved(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsRemoved(false);
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
                    <span
                      className="decrement"
                      onClick={() => decrementNumberOfOrder(item.id)}
                    >
                      -
                    </span>
                    <span>{item.quantity}</span>
                    <span
                      className="increment"
                      onClick={() => incrementNumberOfOrder(item.id)}
                    >
                      +
                    </span>
                  </div>
                </div>
                <img
                  onClick={() => removeItem(item.id)}
                  className="trash_bin"
                  src={Bin}
                  alt="Trash Bin Icon"
                />
              </div>
            ))}
            <p className="total_price">
              Total price for all items: ${total.toFixed(2)}
            </p>
            <button className="order_button" onClick={() => handleOrder()}>
              Order
            </button>
          </div>
        </>
      ) : (
        <h2>No items in cart</h2>
      )}
      <Snackbar open={isRemoved} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Item deleted!
        </Alert>
      </Snackbar>
      <Snackbar
        open={isSuccessOrder}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="info"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Order success!
        </Alert>
      </Snackbar>
    </div>
  );
};
export default ItemsInCart;
