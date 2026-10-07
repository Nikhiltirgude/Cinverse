import { useNavigate, Link, useSearchParams } from "react-router-dom";
import movies from "../../data/movies";

const BookingConfirmation = () => {
  const [searchParams] = useSearchParams();

  const movieId = searchParams.get("movieId");
  const city = searchParams.get("city");
  const theatre = searchParams.get("theatre");
  const time = searchParams.get("time");
  const seats = searchParams.get("seats");

  const movie = movies.find((item) => item.id === Number(movieId));

  const selectedSeats = seats ? seats.split(",") : [];

  const ticketPrice = 250;
  const convenienceFee = 30;

  const totalAmount = selectedSeats.length * ticketPrice + convenienceFee;

  return (
    <div className="min-h-screen bg-[#f8f9fb] text-gray-900">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white px-6 py-4 lg:px-10">
        <h1 className="text-xl font-bold">
          Cine<span className="text-pink-600">Verse</span>
        </h1>
      </div>

      <main className="mx-auto max-w-4xl px-6 py-12 lg:px-10">
        {/* Success */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 shadow-sm">
            <span className="text-4xl text-green-600">✓</span>
          </div>

          <p className="mt-6 text-sm font-semibold text-green-600">
            BOOKING CONFIRMED
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Your Ticket is Confirmed!
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Your movie tickets have been booked successfully.
          </p>
        </div>

        {/* Ticket Card */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
          <div className="border-b border-gray-200 bg-[#111820] p-7 text-white">
            <p className="text-xs font-medium text-pink-400">MOVIE TICKET</p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              {movie?.title || "Unknown Movie"}
            </h2>

            <p className="mt-2 text-sm text-gray-300">
              {theatre} · {city}
            </p>
          </div>

          <div className="p-7">
            <div className="grid gap-7 sm:grid-cols-2">
              <div>
                <p className="text-xs text-gray-500">Show Time</p>
                <p className="mt-1 text-sm font-semibold text-gray-900">
                  {time}
                </p>
              </div>

              <div>
                <p className="mt-1 text-sm font-semibold text-gray-900">
                  Seats
                </p>
                <p className="mt-1 font-semibold">{selectedSeats.join(", ")}</p>
              </div>

              <div>
                <p className="mt-1 text-sm font-semibold text-gray-900">
                  Tickets
                </p>
                <p className="mt-1 font-semibold">{selectedSeats.length}</p>
              </div>

              <div>
                <p className="mt-1 text-sm font-semibold text-pink-600">
                  Amount Paid
                </p>
                <p className="mt-1 font-semibold text-pink-600">
                  ₹{totalAmount}
                </p>
              </div>
            </div>

            <div className="my-6 border-t border-dashed border-gray-300" />

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs text-gray-500">Booking ID</p>

                <p className="mt-1 font-mono text-sm font-semibold">
                  CV-{movieId}-{Date.now().toString().slice(-6)}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 px-5 py-3 text-center ring-1 ring-gray-100">
                <p className="text-xs text-gray-500">Status</p>

                <p className="mt-1 text-sm font-semibold text-green-600">
                  Confirmed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <button className="flex-1 rounded-xl border border-gray-300 bg-white py-3.5 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-pink-500 hover:text-pink-600 hover:shadow-sm">
            Download Ticket
          </button>

          <Link
            to="/"
            className="flex-1 rounded-xl bg-pink-600 py-3.5 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-pink-700 hover:shadow-md hover:shadow-pink-600/20"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
};

export default BookingConfirmation;
