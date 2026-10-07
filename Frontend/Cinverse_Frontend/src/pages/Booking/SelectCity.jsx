import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "../../components/common/Navbar";

const cities = [
  "Bengaluru",
  "Mumbai",
  "Delhi",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Kolkata",
  "Ahmedabad",
  "Jaipur",
];

const SelectCity = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const movieId = searchParams.get("movieId");

  const [search, setSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const filteredCities = useMemo(() => {
    return cities.filter((city) =>
      city.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  const handleContinue = () => {
    if (!selectedCity || !movieId) return;

    navigate(
      `/booking/showtimes?movieId=${movieId}&city=${encodeURIComponent(
        selectedCity,
      )}`,
    );
  };

  return (
    <div className="min-h-screen bg-[#f8f9fb] text-[#111827]">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-8 lg:px-10">
        {/* ================= STEPPER ================= */}
        <div className="mb-12 flex items-center justify-center overflow-x-auto">
          <div className="flex min-w-max items-center">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-600 text-xs font-semibold text-white shadow-md shadow-pink-600/20">
                1
              </div>

              <span className="mt-2 text-[11px] font-medium text-pink-600">
                City
              </span>
            </div>

            <div className="mx-4 h-px w-16 bg-gray-300 sm:w-24" />

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white text-xs text-gray-400">
                2
              </div>

              <span className="mt-2 text-[11px] text-gray-400">Show Time</span>
            </div>

            <div className="mx-3 h-px w-14 bg-gray-300 sm:w-20" />

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white text-xs text-gray-400">
                3
              </div>

              <span className="mt-2 text-[11px] text-gray-400">Seats</span>
            </div>

            <div className="mx-3 h-px w-14 bg-gray-300 sm:w-20" />

            {/* Step 4 */}
            <div className="flex flex-col items-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white text-xs text-gray-400">
                4
              </div>

              <span className="mt-2 text-[11px] text-gray-400">Payment</span>
            </div>
          </div>
        </div>

        {/* ================= HEADER ================= */}
        <div className="mb-9">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Select City
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Choose your city to find available theatres.
          </p>
        </div>

        {/* ================= SEARCH ================= */}
        <div className="mb-6">
          <div className="flex h-12 items-center rounded-xl border border-gray-200 bg-white px-4 shadow-sm transition focus-within:border-pink-500 focus-within:ring-2 focus-within:ring-pink-500/10">
            <span className="mr-3 text-gray-400">⌕</span>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for your city..."
              className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
            />

            {search && (
              <button
                onClick={() => setSearch("")}
                className="text-sm text-gray-400 hover:text-gray-700"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* ================= CITY GRID ================= */}
        {filteredCities.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {filteredCities.map((city) => {
              const isSelected = selectedCity === city;

              return (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`flex items-center rounded-xl border px-4 py-4 text-left text-sm font-medium shadow-sm transition ${
                    isSelected
                      ? "border-pink-500 bg-pink-50 text-pink-600 ring-1 ring-pink-500"
                      : "border-gray-200 bg-white text-gray-700 hover:-translate-y-0.5 hover:border-pink-400 hover:text-pink-600 hover:shadow-md"
                  }`}
                >
                  {/* Radio */}
                  <span
                    className={`mr-3 flex h-4 w-4 items-center justify-center rounded-full border ${
                      isSelected ? "border-pink-600" : "border-gray-300"
                    }`}
                  >
                    {isSelected && (
                      <span className="h-2 w-2 rounded-full bg-pink-600" />
                    )}
                  </span>

                  {city}
                </button>
              );
            })}
          </div>
        ) : (
          /* ================= NO RESULT ================= */
          <div className="rounded-lg border border-dashed border-gray-300 bg-white py-12 text-center">
            <p className="text-sm font-medium text-gray-600">No cities found</p>

            <p className="mt-1 text-xs text-gray-400">
              Try searching for another city.
            </p>
          </div>
        )}

        {/* ================= SELECTED CITY ================= */}
        {selectedCity && (
          <div className="mt-6 rounded-xl border border-pink-100 bg-pink-50 px-5 py-4">
            <p className="text-xs font-medium text-gray-500">Selected city</p>

            <p className="mt-1 text-base font-semibold text-pink-600">
              {selectedCity}
            </p>
          </div>
        )}

        {/* ================= CONTINUE ================= */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={handleContinue}
            disabled={!selectedCity}
            className={`rounded-lg px-8 py-3 text-sm font-semibold text-white shadow-sm transition ${
              selectedCity
                ? "bg-pink-600 hover:bg-pink-700 hover:shadow-lg hover:shadow-pink-600/20"
                : "cursor-not-allowed bg-gray-300"
            }`}
          >
            Continue →
          </button>
        </div>
      </main>
    </div>
  );
};

export default SelectCity;
