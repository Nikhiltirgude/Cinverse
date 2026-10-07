import { useState } from "react";
import { Link } from "react-router-dom";

const bookings = [
  {
    id: "CV-2-483921",
    movie: "Jawan",
    theatre: "Cinepolis",
    city: "Bengaluru",
    date: "28 Sep 2026",
    time: "7:30 PM",
    seats: "B3, B4",
    amount: 530,
    status: "Confirmed",
  },
  {
    id: "CV-1-271845",
    movie: "Oppenheimer",
    theatre: "PVR Cinemas",
    city: "Bhopal",
    date: "02 Oct 2026",
    time: "6:30 PM",
    seats: "C4, C5",
    amount: 530,
    status: "Confirmed",
  },
];

const MyBookings = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredBookings = bookings.filter((booking) => {
    if (activeTab === "all") return true;

    if (activeTab === "upcoming") {
      return booking.status === "Confirmed";
    }

    if (activeTab === "completed") {
      return booking.status === "Completed";
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-[#f8f9fb] text-gray-900">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white px-6 py-4 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Link to="/" className="text-xl font-bold">
            Cine<span className="text-pink-600">Verse</span>
          </Link>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        {/* Page Header */}
        <div>
          <p className="text-sm font-medium text-pink-600">YOUR ACCOUNT</p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            My Bookings
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            View and manage all your movie bookings.
          </p>
        </div>

        {/* Account Layout */}
        <div className="mt-10 grid gap-7 lg:grid-cols-[260px_1fr]">
          {/* Sidebar */}
          <div className="h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-3 border-b border-gray-200 pb-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-lg font-bold text-pink-600 shadow-sm">
                N
              </div>

              <div>
                <p className="font-semibold">CineVerse User</p>

                <p className="text-xs text-gray-500">user@example.com</p>
              </div>
            </div>

            <div className="space-y-1">
              <Link
                to="/my-bookings"
                className="block rounded-lg bg-pink-50 px-4 py-3 text-sm font-semibold text-pink-600 shadow-sm"
              >
                My Bookings
              </Link>

              <Link
                to="/profile"
                className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
              >
                Profile
              </Link>
            </div>
          </div>

          {/* Booking Content */}
          <div>
            {/* Tabs */}
            <div className="flex gap-7 overflow-x-auto border-b border-gray-200">
              <button
                onClick={() => setActiveTab("all")}
                className={`pb-3 text-sm font-semibold ${
                  activeTab === "all"
                    ? "border-b-2 border-pink-600 text-pink-600"
                    : "text-gray-500 transition hover:text-gray-900"
                }`}
              >
                All Bookings
              </button>

              <button
                onClick={() => setActiveTab("upcoming")}
                className={`pb-3 text-sm font-semibold ${
                  activeTab === "upcoming"
                    ? "border-b-2 border-pink-600 text-pink-600"
                    : "text-gray-500 transition hover:text-gray-900"
                }`}
              >
                Upcoming
              </button>

              <button
                onClick={() => setActiveTab("completed")}
                className={`pb-3 text-sm font-semibold ${
                  activeTab === "completed"
                    ? "border-b-2 border-pink-600 text-pink-600"
                    : "text-gray-500 transition hover:text-gray-900"
                }`}
              >
                Completed
              </button>
            </div>

            {/* Booking Cards */}
            <div className="mt-8 space-y-5">
              {filteredBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    {/* Movie */}
                    <div>
                      <div className="flex items-center gap-3">
                        <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
                          {booking.movie}
                        </h2>

                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600 shadow-sm">
                          {booking.status}
                        </span>
                      </div>

                      <p className="mt-2 text-sm text-gray-500">
                        {booking.theatre} · {booking.city}
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        {booking.date} · {booking.time}
                      </p>
                    </div>

                    {/* Details */}
                    <div className="grid grid-cols-2 gap-x-10 gap-y-5 sm:grid-cols-4">
                      <div>
                        <p className="text-xs text-gray-500">Booking ID</p>

                        <p className="mt-1 text-sm font-semibold text-gray-900">
                          {booking.id}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-gray-500">Seats</p>

                        <p className="mt-1 text-sm font-semibold text-gray-900">
                          {booking.seats}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-gray-500">Amount</p>

                        <p className="mt-1 text-sm font-semibold text-gray-900">
                          ₹{booking.amount}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-gray-500">Tickets</p>

                        <p className="mt-1 text-sm font-semibold text-gray-900">
                          {booking.seats.split(",").length}
                        </p>
                      </div>
                    </div>

                    {/* Action */}
                    <Link
                      to={`/booking/confirmation?movieId=${
                        booking.movie === "Jawan" ? 2 : 1
                      }&city=${encodeURIComponent(
                        booking.city,
                      )}&theatre=${encodeURIComponent(
                        booking.theatre,
                      )}&time=${encodeURIComponent(
                        booking.time,
                      )}&seats=${encodeURIComponent(booking.seats)}`}
                      className="rounded-lg border border-gray-300 px-5 py-2.5 text-center text-sm font-semibold transition hover:-translate-y-0.5 hover:border-pink-500 hover:text-pink-600 hover:shadow-sm"
                    >
                      View Ticket
                    </Link>
                  </div>
                </div>
              ))}

              {/* Empty State */}
              {filteredBookings.length === 0 && (
                <div className="rounded-2xl border border-gray-200 bg-white px-6 py-16 text-center shadow-sm">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-2xl">
                    🎟️
                  </div>

                  <h2 className="mt-5 text-lg font-bold text-gray-900">
                    No bookings found
                  </h2>

                  <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
                    You don't have any bookings in this category yet.
                  </p>

                  <Link
                    to="/movies"
                    className="mt-6 inline-block rounded-lg bg-pink-600 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-pink-700 hover:shadow-md hover:shadow-pink-600/20"
                  >
                    Browse Movies
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyBookings;
