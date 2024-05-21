import { useEffect, useState } from "react";
import { API_OPTIONS, IMG_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ id, PosterPath }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [trailerid, setTrailerId] = useState(null);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    if (json.results === false || json.success === false) {
      return null;
    } else {
      const filterData = json?.results?.filter(
        (video) => video.name === "Official Trailer"
      );
      const trailer = filterData[0];
      if (trailer === undefined) {
        return null;
      } else {
        setTrailerId(trailer?.key);
      }
    }
  };

  // console.log(filterData);

  useEffect(() => {
    getMovieVideos();
  }, []);

  if (!PosterPath) return null;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const imageStyle = {
    transform: isHovered ? "scale(1.1)" : "scale(1)", // Enlarge on hover
    transition: "transform 0.3s ease-in-out", // Smooth transition effect
  };

  return (
    // <div className="w-36 md:w-52 p-3">
    //   <img src={IMG_CDN_URL + PosterPath} alt="Movie Card" />
    // </div>

    <div
      className=" w-40 pr-5 md:w-60 md:pr-6 movie-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={"https://www.youtube.com/watch?v=" + trailerid}>
        <img
          src={IMG_CDN_URL + PosterPath}
          alt="Movie Poster"
          style={imageStyle}
          className="poster-image rounded-lg"
        />
      </Link>
    </div>
  );
};

export default MovieCard;
