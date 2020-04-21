import React, { useState, useEffect, Fragment } from "react";
import { Row, Col } from "antd";
import { API_URL, API_KEY } from "../utils/constants";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import MovieCatalog from "../components/MovieCatalog";
import Pagination from "../components/Pagination";

const NewMovies = () => {
  const [movieList, setMovieList] = useState({});
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const request = await fetch(
        `${API_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`
      );
      const movies = await request.json();
      setMovieList(movies);
    })();
  }, [page]);

  const onChangePage = (page) => setPage(page);

  return (
    <Row>
      <Col span="24" style={{ textAlign: "center", marginTop: 25 }}>
        <h1 style={{ fontSize: 35, fontWeight: "bold" }}>
          Ultimos Lanzamientos
        </h1>
      </Col>
      {movieList.results ? (
        <Fragment>
          <Col
            span={24}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            <MovieCatalog movies={movieList} />
          </Col>
          <Col span={24}>
            <Pagination
              currentPage={movieList.page}
              totalItem={movieList.total_results}
              onChangePage={onChangePage}
            />
          </Col>
        </Fragment>
      ) : (
        <Col span={24}>
          <Loading />
        </Col>
      )}

      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  );
};

export default NewMovies;
