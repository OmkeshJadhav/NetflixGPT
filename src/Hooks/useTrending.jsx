import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTrending } from "../data/movieSlice";

const useTrending = () => {
  const dispatch = useDispatch();

  const trending = useSelector((store) => store.movies.trending);

  const getTrending = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/all/day?",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addTrending(json.results));
  };

  useEffect(() => {
    !trending && getTrending();
  }, []);
};

export default useTrending;
