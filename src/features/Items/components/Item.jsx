import "./styles/Item.css";

const Item = ({ item }) => {
  return (
    <div className="item_item">
      <img src={item.image} alt={item.title} />
      <div className="item_description">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>${item.price}</p>
        <button>Add to cart</button>
      </div>
    </div>
  );
};
export default Item;
