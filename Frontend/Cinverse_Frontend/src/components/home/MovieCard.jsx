import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="group w-[170px] shrink-0 overflow-hidden rounded-xl bg-[#18212b] transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:w-[180px]">

      {/* Poster */}
      <div className="relative h-[245px] overflow-hidden bg-[#111820]">

        <img
          src={movie.poster}
          alt={movie.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

        {/* Rating */}
        <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-md bg-black/80 px-2 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
          <span>⭐</span>
          <span>{movie.rating}</span>
        </div>
      </div>

      {/* Movie Information */}
      <div className="p-3">

        <h3 className="truncate text-sm font-semibold text-white">
          {movie.title}
        </h3>

        <p className="mt-1 truncate text-xs text-gray-400">
          {movie.genre} · {movie.duration}
        </p>

        <Link
          to={`/movies/${movie.id}`}
          className="mt-3 block w-full rounded-md bg-pink-600 py-2 text-center text-xs font-semibold text-white transition hover:bg-pink-700"
        >
          Book Now
        </Link>

      </div>
    </div>
  );
};

export default MovieCard;