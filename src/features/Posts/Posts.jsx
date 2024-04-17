import { useState, useEffect } from "react";
import axios from "axios";
import "./Posts.css";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../stores/cart/cart.store";

const Posts = () => {
  const { addItemToCart } = useCartStore();

  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setData(res.data.splice(0, 10));
      })
      .catch((err) => {
        console.log(err, "ERR");
      });
  }, []);

  const handleNavigateToPostId = (postId) => {
    navigate(`/posts/${postId}`);
  };

  const deletePost = async (postId) => {
    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      alert(`Post ${postId} deleted`);
      setData((prevData) => prevData.filter((post) => post.id !== postId));
    } catch (err) {
      console.log(err, "ERR");
    }
  };

  const handleAddToCart = (post) => {
    const itemToAdd = {
      id: post.id,
      title: post.title,
    };
    addItemToCart(itemToAdd);
  };

  return (
    <div className="divCSS">
      {data.map((post) => (
        <div key={post.id} className="dataMapDiv">
          <h2 onClick={() => handleNavigateToPostId(post.id)}>{post.title}</h2>
          <p>{post.body}</p>
          <button className="butt" onClick={() => deletePost(post.id)}>
            Delete post
          </button>
          <button className="butt" onClick={() => handleAddToCart(post)}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Posts;
