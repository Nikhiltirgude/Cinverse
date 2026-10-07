import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import movies from "../../data/movies";

const MovieCarousel = () => {
  return (
    <section className="bg-[#0f1720] px-6 py-10 lg:px-10">
      {/* Section Header */}
      <div className="mx-auto mb-5 flex max-w-[1400px] items-center justify-between">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Now Showing
        </h2>

        <Link
          to="/movies"
          className="text-xs text-gray-400 transition hover:text-pink-500 sm:text-sm"
        >
          See All →
        </Link>
      </div>

      {/* Movie Cards */}
      <div className="mx-auto flex max-w-[1400px] gap-5 overflow-x-auto px-1 pb-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieCarousel;
