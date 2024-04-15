import { useState, useEffect } from "react";
import axios from "axios";
import "./Posts.css";
import { useNavigate } from "react-router-dom";
import { useAddItemToCart } from "../../stores/cart/cart.store"; //dodano

const Posts = () => {
  const { addItemtoCart } = useAddItemToCart(); //dodano

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

  const functionOfPosts = (post) => {
    const dataPost = {
      id: post.id,
      title: post.title,
    };
    addItemtoCart(dataPost);
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
          <button className="butt" onClick={() => functionOfPosts(post)}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Posts;
