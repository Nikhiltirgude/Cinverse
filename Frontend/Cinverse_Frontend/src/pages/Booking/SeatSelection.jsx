import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SeatSelection = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [selectedSeats, setSelectedSeats] = useState([]);
  const ticketPrice = 250;
  const totalPrice = selectedSeats.length * ticketPrice;

  const seatRows = [
    {
      row: "A",
      seats: ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8"],
    },
    {
      row: "B",
      seats: ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8"],
    },
    {
      row: "C",
      seats: ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8"],
    },
    {
      row: "D",
      seats: ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8"],
    },
    {
      row: "E",
      seats: ["E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8"],
    },
  ];

  const handleSeatClick = (seat) => {
    setSelectedSeats((previous) =>
      previous.includes(seat)
        ? previous.filter((item) => item !== seat)
        : [...previous, seat],
    );
  };

  const movieId = searchParams.get("movieId");
  const city = searchParams.get("city");
  const theatre = searchParams.get("theatre");
  const time = searchParams.get("time");

  return (
    <div className="min-h-screen bg-[#f8f9fb] text-gray-900">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white px-6 py-4 lg:px-10">
        <h1 className="text-xl font-bold">
          Cine<span className="text-pink-600">Verse</span>
        </h1>
      </div>

      <main className="mx-auto max-w-6xl px-6 py-10">
        {/* Stepper */}
        <div className="mb-10 flex items-center justify-center">
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-600 text-sm font-semibold text-white">
                ✓
              </div>
              <span className="mt-2 text-xs text-pink-600">City & Theatre</span>
            </div>

            <div className="mx-3 h-px w-12 bg-pink-600 sm:w-20" />

            <div className="flex flex-col items-center">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-600 text-sm font-semibold text-white">
                ✓
              </div>
              <span className="mt-2 text-xs text-pink-600">Show Time</span>
            </div>

            <div className="mx-3 h-px w-12 bg-pink-600 sm:w-20" />

            <div className="flex flex-col items-center">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-600 text-sm font-semibold text-white">
                3
              </div>
              <span className="mt-2 text-xs font-medium text-pink-600">
                Seats
              </span>
            </div>

            <div className="mx-3 h-px w-12 bg-gray-300 sm:w-20" />

            <div className="flex flex-col items-center">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-sm text-gray-400">
                4
              </div>
              <span className="mt-2 text-xs text-gray-400">Payment</span>
            </div>
          </div>
        </div>

        {/* Booking Info */}
        <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight">
            Select Your Seats
          </h2>

          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
            <span>🎬 Movie ID: {movieId}</span>
            <span>📍 {city}</span>
            <span>🏢 {theatre}</span>
            <span>🕐 {time}</span>
          </div>
        </div>

        {/* Seat Layout */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          {/* Screen */}
          <div className="mx-auto mb-12 max-w-lg">
            <div className="rounded-lg bg-gray-800 py-3 text-center text-sm font-semibold tracking-[0.35em] text-white shadow-lg">
              SCREEN
            </div>

            <div className="mx-auto mt-2 h-1 w-3/4 rounded-full bg-pink-200" />
          </div>

          {/* Seats */}
          <div className="flex flex-col items-center gap-4">
            {seatRows.map((row) => (
              <div key={row.row} className="flex items-center gap-4">
                {/* Row label */}
                <span className="w-5 text-sm font-semibold text-gray-400">
                  {row.row}
                </span>

                {/* Seats */}
                <div className="flex gap-2.5">
                  {row.seats.map((seat) => {
                    const isSelected = selectedSeats.includes(seat);

                    return (
                      <button
                        key={seat}
                        onClick={() => handleSeatClick(seat)}
                        className={`h-10 w-10 rounded-md border text-xs font-medium transition hover:-translate-y-0.5 ${
                          isSelected
                            ? "border-pink-600 bg-pink-600 text-white"
                            : "border-gray-300 bg-white text-gray-600 hover:border-pink-500 hover:text-pink-600"
                        }`}
                      >
                        {seat.slice(1)}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <span className="h-4 w-4 rounded border border-gray-300 bg-white" />
              Available
            </div>

            <div className="flex items-center gap-2">
              <span className="h-4 w-4 rounded bg-pink-600" />
              Selected
            </div>

            <div className="flex items-center gap-2">
              <span className="h-4 w-4 rounded bg-gray-400" />
              Occupied
            </div>
          </div>
        </div>

        {/* Booking Summary */}
        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            {/* Selected Seats */}
            <div>
              <p className="text-sm text-gray-500">Selected Seats</p>

              <p className="mt-1 text-lg font-semibold">
                {selectedSeats.length > 0
                  ? selectedSeats.join(", ")
                  : "No seats selected"}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                ₹{ticketPrice} × {selectedSeats.length} seat
                {selectedSeats.length !== 1 ? "s" : ""}
              </p>
            </div>

            {/* Total */}
            <div className="text-left md:text-right">
              <p className="text-sm text-gray-500">Total Amount</p>

              <p className="mt-1 text-2xl font-bold text-pink-600">
                ₹{totalPrice}
              </p>
            </div>
          </div>

          {/* Payment Button */}
          <div className="mt-6 flex justify-end">
            <button
              disabled={selectedSeats.length === 0}
              onClick={() => {
                navigate(
                  `/booking/payment?movieId=${movieId}&city=${encodeURIComponent(
                    city,
                  )}&theatre=${encodeURIComponent(
                    theatre,
                  )}&time=${encodeURIComponent(
                    time,
                  )}&seats=${encodeURIComponent(selectedSeats.join(","))}`,
                );
              }}
              className={`rounded-lg px-8 py-3 text-sm font-semibold shadow-sm transition ${
                selectedSeats.length > 0
                  ? "bg-pink-600 text-white hover:bg-pink-700 hover:shadow-lg hover:shadow-pink-600/20"
                  : "cursor-not-allowed bg-gray-200 text-gray-400"
              }`}
            >
              Proceed to Payment →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SeatSelection;
