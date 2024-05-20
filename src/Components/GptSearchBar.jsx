import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../data/gptSlice";
import { useDispatch } from "react-redux";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);

    const gptQuery =
      "Act as a movie recommendation system and suggest some movies, webseries, serials etc. for the query : " +
      searchText.current.value +
      "Only give 5 name of suggestions and separate those suggestions by comma(,).";

    const gptResults = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: gptQuery,
        },
      ],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) {
      //Error Handling"
    } else {
      console.log(gptResults.choices?.[0]?.message.content);
    }
    const gptMovies = gptResults.choices?.[0]?.message.content.split(","); // "," will give array of movies : ["Hera Pheri", "Padosan", "3 idiots"]

    // For each movie search TMDB
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieName: gptResults, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 grid grid-cols-12 rounded-lg bg-black bg-opacity-75 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="search"
          placeholder="What Would You Like To Watch Today ?"
          className="p-4 m-4 col-span-9 text-white rounded-lg bg-black bg-opacity-10 placeholder-white border border-red-500"
        />
        <button
          className=" px-4 m-4 bg-red-500 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
