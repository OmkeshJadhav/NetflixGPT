import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useTrending from "../Hooks/useTrending";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  usePopularMovies();
  useTrending();

  return (
    <div>
      <div>
        <Header />
      </div>
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <div>
            <MainContainer />
          </div>
          <div>
            <SecondaryContainer />
          </div>
        </>
      )}
    </div>
  );
};

export default Browse;
