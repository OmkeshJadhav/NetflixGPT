import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <MainContainer />
        {/* Main Conatianer
            - Video playing
            - Title
            - Description
            - 2 Buttons - Play & More Info
          */}
      </div>
      <div>
        <SecondaryContainer />
        {/* Secondary Container
            - any Movie Lists with horizontal Scroll
            - Each movie list has movie cards
        */}
      </div>
    </div>
  );
};

export default Browse;
