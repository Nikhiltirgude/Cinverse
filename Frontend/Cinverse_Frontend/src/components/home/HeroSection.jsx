import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const HeroSection = () => {
  const [currentMovie, setCurrentMovie] = useState(0);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const heroMovies = [
    {
      title: "Mission Impossible",
      image: "/images/movies/mission-impossible.jpg",
    },
    {
      title: "Oppenheimer",
      image: "/images/movies/oppenheimer.jpg",
    },
    {
      title: "Jawan",
      image: "/images/movies/jawan.jpg",
    },
  ];

  const nextMovie = () => {
    setCurrentMovie((prev) => (prev + 1) % heroMovies.length);
  };

  const previousMovie = () => {
    setCurrentMovie(
      (prev) => (prev - 1 + heroMovies.length) % heroMovies.length,
    );
  };

  const movie = heroMovies[currentMovie];

  return (
    <section className="relative min-h-[450px] overflow-hidden bg-[#0b1118]">
      {/* Background Movie Image */}
      <div className="absolute inset-0">
        <img
          src={movie.image}
          alt={movie.title}
          className="h-full w-full object-cover opacity-25"
        />

        {/* Dark cinematic overlays */}
        <div className="absolute inset-0 bg-[#0b1118]/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1118] via-[#0b1118]/80 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1118] via-transparent to-[#0b1118]/40" />
      </div>

      {/* Pink Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(236,72,153,0.18),transparent_32%)]" />

      {/* Right Movie Poster */}
      <div className="absolute inset-y-0 right-0 hidden w-[50%] lg:block">
        <div className="absolute right-24 top-1/2 h-[360px] w-[250px] -translate-y-1/2 rotate-2 overflow-hidden rounded-2xl shadow-2xl">
          <img
            src={movie.image}
            alt={movie.title}
            className="h-full w-full object-cover"
          />

          {/* Poster overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

          <div className="absolute bottom-5 left-5">
            <p className="text-[10px] font-medium tracking-[0.25em] text-pink-400">
              NOW SHOWING
            </p>

            <h3 className="mt-1 text-lg font-bold text-white">{movie.title}</h3>
          </div>
        </div>

        {/* Poster Glow */}
        <div className="absolute right-28 top-1/2 h-[370px] w-[260px] -translate-y-1/2 rounded-3xl bg-pink-500/10 blur-3xl" />
      </div>

      {/* Hero Search */}
      <div className="absolute left-1/2 top-6 z-20 hidden w-[360px] -translate-x-1/2 lg:block">
        <form
          onSubmit={(e) => {
            e.preventDefault();

            if (search.trim()) {
              navigate(`/movies?search=${encodeURIComponent(search.trim())}`);
            }
          }}
          className="flex h-10 items-center gap-2 rounded-full bg-[#26323d]/95 px-4 shadow-lg"
        >
          <span className="text-sm text-gray-400">⌕</span>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for movies, theatres, or cities..."
            className="w-full bg-transparent text-xs text-white outline-none placeholder:text-gray-400"
          />
        </form>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[450px] max-w-[1400px] items-center px-6 lg:px-10">
        <div className="max-w-xl">
          {/* Label */}

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[58px]">
            Experience
            <br />
            Movies Like
            <br />
            Never Before
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-lg text-sm leading-6 text-gray-400 sm:text-base">
            Book movie tickets, discover the latest releases, explore theatres
            and enjoy unforgettable movie experiences — all in one place.
          </p>

          {/* CTA */}
          <Link
            to="/movies"
            className="mt-7 inline-block rounded-lg bg-pink-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-pink-700"
          >
            Explore Movies
          </Link>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-7 right-10 z-20 hidden items-center gap-4 lg:flex">
        <button
          onClick={previousMovie}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 bg-black/40 text-sm text-gray-300 backdrop-blur-sm transition hover:border-pink-500 hover:bg-pink-500/10 hover:text-white"
        >
          ←
        </button>

        <div className="flex items-center gap-1.5">
          {heroMovies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentMovie(index)}
              className={`h-1.5 rounded-full transition-all ${
                currentMovie === index ? "w-6 bg-pink-500" : "w-1.5 bg-gray-600"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextMovie}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 bg-black/40 text-sm text-gray-300 backdrop-blur-sm transition hover:border-pink-500 hover:bg-pink-500/10 hover:text-white"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
