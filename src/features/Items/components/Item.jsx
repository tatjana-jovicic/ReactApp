import { useOrderStore } from "../../../stores/order/order.store";
import "./styles/Item.css";

const Item = ({ item }) => {
  const { addItemToOrderCart } = useOrderStore();

  const handleAddItem = (item) => {
    const AddItem = {
      id: item.id,
      image: item.image,
      title: item.title,
      price: item.price,
    };
    addItemToOrderCart(AddItem);
  };

  return (
    <div className="item_item">
      <img src={item.image} alt={item.title} />
      <div className="item_description">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>${item.price}</p>
        <button onClick={() => handleAddItem(item)}>Add to cart</button>
      </div>
    </div>
  );
};
export default Item;
