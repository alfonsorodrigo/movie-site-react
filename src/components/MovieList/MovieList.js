import React from "react";
import { List, Avatar, Button } from "antd";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import "./MovieList.scss";
import { RightOutlined } from "@ant-design/icons";

const MovieList = ({ movies: { result, loading }, title }) => {
  if (loading || !result) {
    return <Loading />;
  }
  return (
    <List
      className="movie-list"
      size="default"
      header={<h2>{title}</h2>}
      bordered
      dataSource={result.results}
      renderItem={(movie) => <RenderMovie movie={movie} />}
    />
  );
};

const RenderMovie = ({ movie: { id, title, poster_path } }) => {
  const Posterpath = `https://image.tmdb.org/t/p/original${poster_path}`;
  return (
    <List.Item className="movie-list__movie">
      <List.Item.Meta
        avatar={<Avatar src={Posterpath} />}
        title={<Link to={`/movie/${id}`}>{title}</Link>}
      />
      <Link to={`/movie/${id}`}>
        <Button type="primary" shape="circle" icon={<RightOutlined />} />
      </Link>
    </List.Item>
  );
};
export default MovieList;
