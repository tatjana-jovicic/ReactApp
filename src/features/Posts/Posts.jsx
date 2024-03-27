import { useState, useEffect } from "react";
import axios from "axios";
import "./Posts.css";
import { useNavigate } from "react-router-dom";

const Posts = () => {
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

  return (
    <div className="divCSS">
      {data.map((post) => (
        <div key={post.id} className="dataMapDiv">
          <h2 onClick={() => handleNavigateToPostId(post.id)}>{post.title}</h2>
          <p>{post.body}</p>
          <button onClick={() => deletePost(post.id)}>Delete post</button>
        </div>
      ))}
    </div>
  );
};

export default Posts;
