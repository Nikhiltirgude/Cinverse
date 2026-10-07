import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="h-[62px] border-b border-white/5 bg-[#111820] text-white">
      <div className="mx-auto flex h-full max-w-[1400px] items-center px-5 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center gap-2">
         <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-600 text-sm font-bold shadow-md shadow-pink-600/20">
            C
          </span>

          <span className="text-lg font-bold tracking-tight">
            Cine<span className="text-pink-500">Verse</span>
          </span>
        </Link>

        {/* Navigation */}
        <div className="ml-9 hidden items-center gap-6 md:flex">
          <Link
            to="/"
            className={`text-sm transition ${
              isActive("/")
                ? "font-medium text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Home
          </Link>

          <Link
            to="/movies"
            className={`text-sm transition ${
              isActive("/movies")
                ? "font-medium text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Movies
          </Link>

          <Link
            to="/theatres"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            Theatres
          </Link>

          <Link
            to="/offers"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            Offers
          </Link>

          <Link
            to="/more"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            More
          </Link>
        </div>

        {/* Right Section */}
        <div className="ml-auto flex items-center gap-3">
          {/* Search */}
          <div className="hidden h-9 w-56 items-center gap-2 rounded-full bg-[#26323d] px-4 lg:flex">
            <span className="text-sm text-gray-400">⌕</span>

            <form
              onSubmit={(e) => {
                e.preventDefault();

                if (search.trim()) {
                  navigate(
                    `/movies?search=${encodeURIComponent(search.trim())}`,
                  );
                }
              }}
              className="w-full"
            >
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search movies, theatres, or cities..."
                className="w-full bg-transparent text-xs text-white outline-none placeholder:text-gray-400"
              />
            </form>
          </div>

          {/* Login */}
          <Link
            to="/login"
            className="rounded-md border border-gray-600 px-4 py-2 text-xs font-medium transition hover:bg-white/5"
          >
            Login
          </Link>

          {/* Sign Up */}
          <Link
            to="/signup"
            className="rounded-md bg-pink-600 px-4 py-2 text-xs font-semibold transition hover:bg-pink-700"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
