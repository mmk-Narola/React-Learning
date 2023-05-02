import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";

const initialState = {
  loading: true,
  error: " ",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: " ",
      };

    case "FETCH_ERROR":
      return {
        loading: false,
        post: action.payload,
        error: "Something Went wrong!",
      };

    default:
      return state;
  }
};

const FetchApiUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/5`)
      .then((response) => {
        dispatch({
          type: "FETCH_SUCCESS",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);

  return (
    <div className="profile">
      <h2>FetchApi Use Reducer </h2>
      {state.loading ? "Loading..." : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
};

export default FetchApiUseReducer;