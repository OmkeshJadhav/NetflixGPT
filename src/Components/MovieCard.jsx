import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ PosterPath }) => {
  if (!PosterPath) return null;
  return (
    <div className="w-36 md:w-52 p-3">
      <img src={IMG_CDN_URL + PosterPath} alt="Movie Card" />
    </div>
  );
};

export default MovieCard;
