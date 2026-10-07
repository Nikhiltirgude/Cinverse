import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import movies from "../../data/movies";

const theatres = [
  {
    name: "Cinepolis",
    location: "DB City Mall",
    timings: ["10:30 AM", "2:30 PM", "7:30 PM", "10:30 PM"],
  },
  {
    name: "PVR Cinemas",
    location: "Aashima Mall",
    timings: ["11:00 AM", "3:00 PM", "6:30 PM", "9:45 PM"],
  },
  {
    name: "INOX",
    location: "Capital Mall",
    timings: ["10:00 AM", "1:45 PM", "5:30 PM", "8:45 PM"],
  },
];

const ShowTimes = () => {
  const [searchParams] = useSearchParams();

  const movieId = Number(searchParams.get("movieId"));
  const city = searchParams.get("city");
  const selectedDate = "28 Sep 2026";

  const [selectedTheatre, setSelectedTheatre] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const movie = movies.find((item) => item.id === movieId);

  if (!movie) {
    return (
      <div className="min-h-screen bg-[#0f1720] text-white">
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-gray-400">Movie not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f1720] text-white">
      {/* Header */}
      <div className="border-b border-gray-800 bg-[#111820] px-6 py-4 lg:px-10">
        <h1 className="text-xl font-bold">
          Cine<span className="text-pink-500">Verse</span>
        </h1>
      </div>

      <main className="mx-auto max-w-5xl px-6 py-10">
        {/* Stepper */}
        <div className="mb-10 flex items-center justify-center">
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-600 text-sm font-semibold">
                ✓
              </div>
              <span className="mt-2 text-xs text-pink-500">City</span>
            </div>

            <div className="mx-3 h-px w-12 bg-pink-600 sm:w-20" />

            <div className="flex flex-col items-center">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-600 text-sm font-semibold">
                2
              </div>
              <span className="mt-2 text-xs text-pink-500">Show Time</span>
            </div>

            <div className="mx-3 h-px w-12 bg-gray-700 sm:w-20" />

            <div className="flex flex-col items-center">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-600 text-sm text-gray-400">
                3
              </div>
              <span className="mt-2 text-xs text-gray-500">Seats</span>
            </div>

            <div className="mx-3 h-px w-12 bg-gray-700 sm:w-20" />

            <div className="flex flex-col items-center">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-600 text-sm text-gray-400">
                4
              </div>
              <span className="mt-2 text-xs text-gray-500">Payment</span>
            </div>
          </div>
        </div>

        <div className="mb-8 flex items-center gap-4 rounded-2xl border border-gray-800 bg-[#18212b] p-5 shadow-lg shadow-black/10">
          <img
            src={movie.poster}
            alt={movie.title}
            className="h-24 w-16 rounded-lg object-cover"
          />

          <div>
            <h2 className="text-lg font-bold">{movie.title}</h2>
            <p className="mt-1 text-sm text-gray-400">
              {city} • {selectedDate}
            </p>
            <p className="mt-1 text-xs text-gray-500">
              ⭐ {movie.rating} • {movie.genre}
            </p>
          </div>
        </div>

        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-medium text-pink-500">SELECT YOUR SHOW</p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Choose Show Time
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            {movie.title} • {city} • {selectedDate}
          </p>
        </div>

        {/* Theatres */}
        <div className="space-y-5">
          {theatres.map((theatre) => (
            <div
              key={theatre.name}
              className="rounded-2xl border border-gray-800 bg-[#18212b] p-6 shadow-lg shadow-black/5 transition hover:border-gray-700"
            >
              {/* Theatre info */}
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-xl font-semibold">{theatre.name}</h3>

                  <p className="mt-1 text-sm text-gray-400">
                    {theatre.location}
                  </p>
                </div>

                <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
                  Available
                </span>
              </div>

              {/* Timings */}
              <div className="mt-5">
                <p className="mb-3 text-xs uppercase tracking-wide text-gray-500">
                  Select show time
                </p>

                <div className="flex flex-wrap gap-3">
                  {theatre.timings.map((time) => (
                    <button
                      key={time}
                      onClick={() => {
                        setSelectedTheatre(theatre.name);
                        setSelectedTime(time);
                      }}
                      className={`rounded-lg border px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5 ${
                        selectedTheatre === theatre.name &&
                        selectedTime === time
                          ? "border-pink-500 bg-pink-600 text-white"
                          : "border-gray-700 bg-[#111820] text-gray-300 hover:border-pink-500 hover:text-white"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Continue */}
        <div className="mt-8 flex justify-end">
          <Link
            to={
              selectedTheatre && selectedTime
                ? `/booking/seats?movieId=${movieId}&city=${encodeURIComponent(
                    city,
                  )}&theatre=${encodeURIComponent(
                    selectedTheatre,
                  )}&time=${encodeURIComponent(selectedTime)}`
                : "#"
            }
            className={`rounded-lg px-8 py-3 text-sm font-semibold shadow-sm transition ${
              selectedTheatre && selectedTime
                ? "bg-pink-600 hover:bg-pink-700 hover:shadow-lg hover:shadow-pink-600/20"
                : "cursor-not-allowed bg-gray-700 text-gray-500"
            }`}
          >
            Select Seats →
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ShowTimes;
