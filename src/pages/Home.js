import React, { Fragment } from "react";
import useFetch from "../hooks/useFetch";
import SliderMovies from "../components/SliderMovies";
import { API_URL, API_KEY } from "../utils/constants";

const Home = () => {
  const newMovies = useFetch(
    `${API_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
  );
  return (
    <Fragment>
      <SliderMovies newMovies={newMovies} />
    </Fragment>
  );
};

export default Home;
