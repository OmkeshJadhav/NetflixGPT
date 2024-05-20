import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    <div className="py-4 px-4">
      <h1 className="text-lg md:text-2xl text-white font-bold py-2">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar py-2">
        <div className="flex ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} PosterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
