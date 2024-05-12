import { useState } from "react";
import { useOrderStore } from "../../../stores/order/order.store";
import "./styles/Item.css";
import { Alert, Snackbar } from "@mui/material";

const Item = ({ item }) => {
  const [open, setOpen] = useState(false);
  const { addItemToOrderCart } = useOrderStore();

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleAddItem = (item) => {
    const AddItem = {
      id: item.id,
      image: item.image,
      title: item.title,
      price: item.price,
    };
    addItemToOrderCart(AddItem);
  };

  const handleAddedItem = (item) => {
    handleAddItem(item);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="item_item">
      <img src={item.image} alt={item.title} />
      <div className="item_description">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>${item.price}</p>
        <button onClick={() => handleAddedItem(item)}>Add to cart</button>
      </div>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Item added!
        </Alert>
      </Snackbar>
    </div>
  );
};
export default Item;
