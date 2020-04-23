import React, { useState, useEffect } from "react";
import { Row, Col, Input } from "antd";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import MovieCatalog from "../../components/MovieCatalog";
import Footer from "../../components/Footer";
import { API_URL, API_KEY } from "../../utils/constants";
import "./Search.scss";

const Search = ({ location, history }) => {
  const [movieList, setMovieList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    (async () => {
      const searchValue = queryString.parseUrl(location.search);
      const { s } = searchValue.query;
      const request = await fetch(
        `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${s}&page=1`
      );
      const movies = await request.json();
      setSearchValue(s);
      setMovieList(movies);
    })();
  }, [location.search]);

  const onChangeSearch = (e) => {
    console.log(e.target.value);
    const urlParams = queryString.parse(location.search);
    urlParams.s = e.target.value;
    history.push(`?${queryString.stringify(urlParams)}`);
    setSearchValue(e.target.value);
  };
  return (
    <Row>
      <Col span={12} offset={6} className="search">
        <h1>Busca tu pelicula</h1>
        <Input value={searchValue} onChange={onChangeSearch} />
      </Col>
      {movieList.results && (
        <Row>
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
        </Row>
      )}

      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  );
};

export default withRouter(Search);
