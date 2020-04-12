import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { API_URL, API_KEY } from "../utils/constants";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import MovieCatalog from "../components/MovieCatalog";

const NewMovies = () => {
  const [movieList, setMovieList] = useState({});
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const request = await fetch(
        `${API_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`
      );
      const movies = await request.json();
      console.log(movies);
      setMovieList(movies);
    })();
  }, [page]);
  return (
    <Row>
      <Col span="24" style={{ textAlign: "center", marginTop: 25 }}>
        <h1 style={{ fontSize: 35, fontWeight: "bold" }}>
          Ultimos Lanzamientos
        </h1>
      </Col>
      {movieList.results ? (
        <Col
          span="24"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          <MovieCatalog movies={movieList} />
        </Col>
      ) : (
        <Col span="24">
          <Loading />
        </Col>
      )}

      <Col span="24">
        <Footer />
      </Col>
    </Row>
  );
};

export default NewMovies;
