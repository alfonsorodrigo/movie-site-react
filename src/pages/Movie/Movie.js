import React, { Fragment } from "react";
import { Row, Col, Button } from "antd";
import { useParams } from "react-router-dom";
import moment from "moment";
import useFetch from "../../hooks/useFetch";
import { API_URL, API_KEY } from "../../utils/constants";
import Loading from "../../components/Loading";
import "./Movie.scss";

const Movie = () => {
  const { id } = useParams();
  const movieDetail = useFetch(
    `${API_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  const { loading, result } = movieDetail;
  if (loading || !result) {
    return <Loading />;
  }
  return <RenderMovie movie={movieDetail} />;
};

export default Movie;

const RenderMovie = ({ movie: { loading, result } }) => {
  const { backdrop_path, poster_path } = result;
  const backdropPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;
  return (
    <div
      className="movie"
      style={{ backgroundImage: `url('${backdropPath}')` }}
    >
      <div className="movie__dark"></div>
      <Row>
        <Col span={8} offset={3} className="movie__poster">
          <PosterMovie image={poster_path} />
        </Col>
        <Col span={10} className="movie__info">
          <MovieInfo movieInfo={result} />
        </Col>
      </Row>
    </div>
  );
};

const PosterMovie = ({ image }) => {
  const posterPath = `https://image.tmdb.org/t/p/original${image}`;
  return <div style={{ backgroundImage: `url('${posterPath}')` }}></div>;
};

const MovieInfo = ({ movieInfo }) => {
  const { title, release_date, overview, genres } = movieInfo;

  return (
    <Fragment>
      <div className="movie__info-header">
        <h1>
          {title}
          <span>{moment(release_date, "YYYY-MM-DD").format("YYYY")}</span>
        </h1>
        <Button>Ver Trailer</Button>
      </div>
      <div className="movie__info-content">
        <h3>General</h3>
        <p>{overview}</p>
        <h3>Generos</h3>
        <ul>
          {genres.map((gender) => (
            <li key={gender.id}>{gender.name}</li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};
