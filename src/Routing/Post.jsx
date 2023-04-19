import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/" + id)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, [id]);
  return (
    <>
      <h2>Here Post by {id}</h2>
    </>
  );
};

export default Post;
