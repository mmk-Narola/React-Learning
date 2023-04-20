import axios from "axios";
import { useState, useEffect } from "react";

const ApiCall = () => {
  const [data, setData] = useState(null);
  const [list, seList] = useState(null);

  useEffect(() => {
    // using Fetch Api
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));

    //using Axios
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        seList(
          response.data.map((list) => <li key={list.id}>{list.title}</li>)
        );
      })
      .catch((error) => {
        console.log(error);
      });

    // using async and wait
    // const fetchPost = async () => {
    //   let response = await axios.get(
    //     "https://jsonplaceholder.typicode.com/posts"
    //   );
    //   setPosts(response.data);
    // };

    // fetchPost();
  }, []);

  return (
    <>
      <h2>Api calling using Fetch and Axios Package</h2>
      <div className="profile">
        <h3>Exampl-1 using Fetch Api </h3>
        {data ? <p>{JSON.stringify(data)}</p> : "Loading....."}
      </div>

      <div className="profile">
        <h3>Exampl-2 using Axios Package </h3>
        <ul>{list}</ul>
      </div>
    </>
  );
};

export default ApiCall;
