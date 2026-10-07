import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import movies from "../../data/movies";

const MovieDetails = () => {
  const { id } = useParams();

  const movie = movies.find((item) => item.id === Number(id));

  // Invalid movie ID
  if (!movie) {
    return (
      <div className="min-h-screen bg-[#0f1720] text-white">
        <Navbar />

        <main className="flex min-h-[70vh] items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Movie Not Found</h1>

            <p className="mt-2 text-sm text-gray-400">
              The movie you are looking for does not exist.
            </p>

            <Link
              to="/movies"
              className="mt-6 inline-block rounded-lg bg-pink-600 px-6 py-3 text-sm font-semibold transition hover:bg-pink-700"
            >
              Browse Movies
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f1720] text-white">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <Link
          to="/movies"
          className="mb-6 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
        >
          ← Back to Movies
        </Link>

        <div className="grid gap-12 md:grid-cols-[300px_1fr]">
          {/* Poster */}
          <div className="h-[440px] overflow-hidden rounded-2xl bg-[#18212b] shadow-2xl shadow-black/30">
            <img
              src={movie.poster}
              alt={movie.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Movie Information */}
          <div>
            <p className="mb-3 text-sm font-medium text-pink-500">
              MOVIE DETAILS
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {movie.title}
            </h1>

            {/* Movie Meta */}
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-gray-300">
              <span className="rounded-md bg-yellow-500/10 px-2.5 py-1 font-medium text-yellow-400">
                ⭐ {movie.rating}
              </span>
              <span>•</span>

              <span>{movie.genre}</span>

              <span>•</span>

              <span>{movie.duration}</span>
            </div>

            {/* Description */}
            <p className="mt-6 max-w-2xl leading-7 text-gray-400">
              {movie.description}
            </p>

            {/* Director */}
            <div className="mt-8">
              <p className="text-sm text-gray-400">Director</p>

              <p className="mt-1 font-medium">{movie.director}</p>
            </div>

            {/* Cast */}
            <div className="mt-5">
              <p className="text-sm text-gray-400">Cast</p>

              <p className="mt-1 font-medium">{movie.cast}</p>
            </div>

            {/* Booking */}
            <div className="mt-10 rounded-2xl border border-gray-700 bg-[#18212b] p-6 shadow-lg shadow-black/10">
              <h2 className="text-lg font-semibold">Ready to watch?</h2>

              <p className="mt-2 text-sm text-gray-400">
                Select your city and theatre to book your tickets.
              </p>

              <Link
                to={`/booking?movieId=${movie.id}`}
                className="mt-5 inline-block rounded-lg bg-pink-600 px-7 py-3 text-sm font-semibold transition hover:bg-pink-700 hover:shadow-lg hover:shadow-pink-600/20"
              >
                Book Tickets
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MovieDetails;
