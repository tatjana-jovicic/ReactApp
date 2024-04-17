import "./Items.css";
import { items } from "../../data/items";
import Item from "./components/Item";

const Items = () => {
  return (
    <>
      <div className="item_list">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};
export default Items;
