import { Link } from "react-router-dom";
import "./Navigation.css";
import CartIcon from "../Items/components/CartIcon";

const Navigation = () => {
  return (
    <div className="navCSS">
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "auto",
        }}
      >
        <Link to={{ pathname: "/" }}>Home</Link>
        <Link to={{ pathname: "/about" }}>About</Link>
        <Link to={{ pathname: "/work" }}>Work</Link>
        <Link to={{ pathname: "/posts" }}>Posts</Link>
        <Link to={{ pathname: "/users" }}>Users</Link>
        <Link to={{ pathname: "/tasks" }}>Tasks</Link>
        <Link to={{ pathname: "/clicks" }}>Clicks</Link>
        <Link to={{ pathname: "/cart" }}>Cart</Link>
        <Link to={{ pathname: "/items" }}>Items</Link>
      </div>
      <CartIcon />
    </div>
  );
};

export default Navigation;
