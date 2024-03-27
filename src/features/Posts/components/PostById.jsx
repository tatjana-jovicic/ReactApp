import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostById = () => {
  const { postId } = useParams(); //ZASTO OVO UVODIMO
  const [post, setPost] = useState({});

  const fetchPostById = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      setPost(res.data);
    } catch (err) {
      console.log(err, "err");
    }
  };

  useEffect(() => {
    fetchPostById();
  }, [postId]); //ZASTO OVDJE IMA DEPENDENCY A KOD POSTS NEMA

  console.log(post, "POST");

  return (
    <div
      style={{
        maxWidth: "200px",
        width: "100%",
        border: "1px solid grey",
        backgroundColor: "lightblue",
      }}
    >
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};
export default PostById;
