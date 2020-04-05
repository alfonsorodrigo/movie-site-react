import React from "react";
import "./SliderMovies.scss";
import { Carousel, Button } from "antd";
import { Link } from "react-router-dom";
import Loading from "../Loading";

const SliderMovies = ({ newMovies: { loading, result } }) => {
  if (loading || !result) {
    return <Loading />;
  }
  const { results } = result;
  return (
    <Carousel autoplay className="slider_movies">
      {results.map((movie) => {
        return <Movie key={movie.id} movie={movie} />;
      })}
    </Carousel>
  );
};
export default SliderMovies;

const Movie = ({ movie: { id, backdrop_path, title, overview } }) => {
  const backdropPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;

  return (
    <div
      className="slider-movies__movie"
      style={{ backgroundImage: `url('${backdropPath}')` }}
    >
      <div className="slider-movies__movie-info">
        <div>
          <h2>{title}</h2>
          <p>{overview}</p>
          <Link to={`/movie/${id}`}>
            <Button type="primary">Ver mas</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
