import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  // console.log(movies);

  if (!movies || movies.length === 0) return null; // If nowPlayingMovies has no movie then return ---> Early return Saves the code from failing

  const mainMovie = movies[0];
  // console.log(mainMovie);

  if (!mainMovie) return null;

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[35%] sm:pt-[20%] md:pt-0 bg-black sm:bg-black">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
