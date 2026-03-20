import { useSelector } from "react-redux";
import useMovieTrailer from "../../customHooks/useMovieTrailer";

function BackgroundVideo({ id }) {
  const movieTrailer = useSelector((state) => state.movie?.movieTrailer);

  useMovieTrailer(id);
  return (
    <div className="  absolute inset-0 z-0">
      <iframe
        className=" aspect-video"
        src={`https://www.youtube.com/embed/${movieTrailer?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default BackgroundVideo;
