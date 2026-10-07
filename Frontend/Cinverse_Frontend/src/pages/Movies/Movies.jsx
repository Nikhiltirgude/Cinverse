import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import MovieCard from "../../components/home/MovieCard";
import movies from "../../data/movies";

const Movies = () => {
  const [searchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");

  const [genre, setGenre] = useState("All Genres");
  const [sort, setSort] = useState("Sort By");

  const filteredMovies = useMemo(() => {
    let result = [...movies];

    // Search
    if (search.trim()) {
      const searchValue = search.toLowerCase();

      result = result.filter((movie) =>
        movie.title.toLowerCase().includes(searchValue),
      );
    }

    // Genre
    if (genre !== "All Genres") {
      result = result.filter((movie) => movie.genre === genre);
    }

    // Sorting
    if (sort === "Rating") {
      result.sort((a, b) => Number(b.rating) - Number(a.rating));
    }

    if (sort === "Latest") {
      result.reverse();
    }

    if (sort === "Popular") {
      result.sort((a, b) => Number(b.rating) - Number(a.rating));
    }

    return result;
  }, [search, genre, sort]);

  return (
    <div className="min-h-screen bg-[#0f1720] text-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Browse Movies
          </h1>

          <p className="mt-3 text-sm text-gray-400 sm:text-base">
            Discover movies currently showing and upcoming releases.
          </p>
        </div>

        {/* Search + Filter */}
        <div className="mb-10 flex flex-col gap-3 md:flex-row">
          {/* Search */}
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search movies..."
            className="h-12 flex-1 rounded-lg border border-gray-700 bg-[#18212b] px-4 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-pink-500 focus:ring-1 focus:ring-pink-500/30"
          />

          {/* Genre */}
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="h-11 rounded-lg border border-gray-700 bg-[#18212b] px-4 text-sm text-white outline-none focus:border-pink-500"
          >
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Comedy</option>
            <option>Horror</option>
          </select>

          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="h-11 rounded-lg border border-gray-700 bg-[#18212b] px-4 text-sm text-white outline-none focus:border-pink-500"
          >
            <option>Sort By</option>
            <option>Rating</option>
            <option>Latest</option>
            <option>Popular</option>
          </select>
        </div>

        {/* Result Count */}
        <div className="mb-6 text-sm text-gray-400">
          {filteredMovies.length} movie
          {filteredMovies.length !== 1 ? "s" : ""} found
        </div>

        {/* Movie Grid */}
        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-gray-700 bg-[#18212b] py-20 text-center">
            <div className="text-4xl">🎬</div>

            <h2 className="mt-4 text-lg font-semibold">No movies found</h2>

            <p className="mt-2 text-sm text-gray-500">
              Try another movie name or genre.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Movies;
