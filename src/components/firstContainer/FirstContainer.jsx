import React from "react";
import BackgroundTitle from "../backgroundTitle/BackgroundTitle";
import BackgroundVideo from "../backgroundVideo/BackgroundVideo";
import { useSelector } from "react-redux";

function FirstContainer() {
  const movies = useSelector((state) => state.movie);

  if (movies.latestMovies === null) return;

  const { original_title, overview ,id} = movies.latestMovies[0];

  return (
    <>
      <BackgroundTitle original_title={original_title} overview={overview} />
      <BackgroundVideo id={id} />
    </>
  );
}

export default FirstContainer;
