import React from "react";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const URL = "https://api.themoviedb.org/3";
  const API_KEY = "763f06f50eb9842755c41502a2a11029";
  const movies = useFetch(
    `${URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  console.log(movies);
  return (
    <div>
      <h1>Estamos en Home</h1>
    </div>
  );
};

export default Home;
