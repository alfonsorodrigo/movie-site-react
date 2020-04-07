import React, { Fragment } from "react";
import useFetch from "../hooks/useFetch";
import SliderMovies from "../components/SliderMovies";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";
import { API_URL, API_KEY } from "../utils/constants";

import { Row, Col } from "antd";

const Home = () => {
  const newMovies = useFetch(
    `${API_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
  );

  const popularMovies = useFetch(
    `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );

  const topRateMovies = useFetch(
    `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );
  return (
    <Fragment>
      <SliderMovies newMovies={newMovies} />
      <Row>
        <Col span={12}>
          <MovieList title="Peliculas Populares" movies={popularMovies} />
        </Col>
        <Col span={12}>
          <MovieList
            title="Top Mejores Peliculas Puntuadas"
            movies={topRateMovies}
          />
        </Col>
      </Row>
      <Footer />
    </Fragment>
  );
};

export default Home;
