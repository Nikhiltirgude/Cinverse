import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import movies from "../../data/movies";

const Payment = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState("UPI");

  const movieId = searchParams.get("movieId");
  const city = searchParams.get("city");
  const theatre = searchParams.get("theatre");
  const time = searchParams.get("time");
  const seats = searchParams.get("seats");

  const movie = movies.find((item) => item.id === Number(movieId));

  const selectedSeats = seats ? seats.split(",") : [];

  const ticketPrice = 250;
  const convenienceFee = 30;

  const ticketTotal = selectedSeats.length * ticketPrice;
  const totalAmount = ticketTotal + convenienceFee;

  return (
    <div className="min-h-screen bg-[#f8f9fb] text-gray-900">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white px-6 py-4 lg:px-10">
        <h1 className="text-xl font-bold">
          Cine<span className="text-pink-600">Verse</span>
        </h1>
      </div>

      <main className="mx-auto max-w-6xl px-6 py-12 lg:px-10">
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
                ✓
              </div>
              <span className="mt-2 text-xs text-pink-600">Seats</span>
            </div>

            <div className="mx-3 h-px w-12 bg-pink-600 sm:w-20" />

            <div className="flex flex-col items-center">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-600 text-sm font-semibold text-white">
                4
              </div>
              <span className="mt-2 text-xs font-medium text-pink-600">
                Payment
              </span>
            </div>
          </div>
        </div>

        {/* Payment Header */}
        <div className="mb-10">
          <p className="text-sm font-medium text-pink-600">SECURE CHECKOUT</p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Complete Your Payment
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Review your booking details and choose a payment method.
          </p>
        </div>

        {/* Main Payment Layout */}
        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
          {/* Payment Methods */}
          <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
            <h2 className="text-xl font-bold">Payment Method</h2>

            <p className="mt-1 text-sm text-gray-500">
              Choose how you want to pay.
            </p>

            <div className="mt-6 space-y-3">
              {/* UPI */}
              <button
                onClick={() => setSelectedPayment("UPI")}
                className={`flex w-full items-center justify-between rounded-xl border-2 p-5 text-left transition hover:-translate-y-0.5 hover:shadow-sm ${
                  selectedPayment === "UPI"
                    ? "border-pink-500 bg-pink-50"
                    : "border-gray-200 bg-white hover:border-pink-400"
                }`}
              >
                <div>
                  <p className="font-semibold text-gray-900">UPI</p>

                  <p className="mt-1 text-xs text-gray-500">
                    Google Pay, PhonePe, Paytm and more
                  </p>
                </div>

                <span
                  className={
                    selectedPayment === "UPI"
                      ? "text-pink-600"
                      : "text-gray-400"
                  }
                >
                  {selectedPayment === "UPI" ? "✓" : "→"}
                </span>
              </button>

              {/* Credit / Debit Card */}
              <button
                onClick={() => setSelectedPayment("CARD")}
                className={`flex w-full items-center justify-between rounded-xl border-2 p-5 text-left transition hover:-translate-y-0.5 hover:shadow-sm ${
                  selectedPayment === "CARD"
                    ? "border-pink-500 bg-pink-50"
                    : "border-gray-200 bg-white hover:border-pink-400"
                }`}
              >
                <div>
                  <p className="font-semibold text-gray-900">
                    Credit / Debit Card
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Visa, Mastercard, RuPay
                  </p>
                </div>

                <span
                  className={
                    selectedPayment === "CARD"
                      ? "text-pink-600"
                      : "text-gray-400"
                  }
                >
                  {selectedPayment === "CARD" ? "✓" : "→"}
                </span>
              </button>

              {/* Net Banking */}
              <button
                onClick={() => setSelectedPayment("NET_BANKING")}
                className={`flex w-full items-center justify-between rounded-xl border-2 p-5 text-left transition hover:-translate-y-0.5 hover:shadow-sm ${
                  selectedPayment === "NET_BANKING"
                    ? "border-pink-500 bg-pink-50"
                    : "border-gray-200 bg-white hover:border-pink-400"
                }`}
              >
                <div>
                  <p className="font-semibold text-gray-900">Net Banking</p>

                  <p className="mt-1 text-xs text-gray-500">
                    Pay using your bank account
                  </p>
                </div>

                <span
                  className={
                    selectedPayment === "NET_BANKING"
                      ? "text-pink-600"
                      : "text-gray-400"
                  }
                >
                  {selectedPayment === "NET_BANKING" ? "✓" : "→"}
                </span>
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold">Booking Summary</h2>

            <div className="mt-5 space-y-4 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-gray-500">Movie</span>
                <span className="font-medium text-right">
                  {movie?.title || "Unknown Movie"}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-gray-500">Theatre</span>

                <span className="font-medium text-right">{theatre}</span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-gray-500">City</span>

                <span className="font-medium">{city}</span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-gray-500">Show Time</span>

                <span className="font-medium">{time}</span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-gray-500">Seats</span>

                <span className="font-medium">{seats}</span>
              </div>
            </div>

            <div className="my-5 border-t border-gray-200" />

            <div className="flex justify-between">
              <span className="text-gray-500">Ticket Price</span>

              <span className="font-medium">₹{ticketTotal}</span>
            </div>

            <div className="mt-3 flex justify-between">
              <span className="text-gray-500">Convenience Fee</span>

              <span className="font-medium">₹{convenienceFee}</span>
            </div>

            <div className="my-5 border-t border-gray-200" />

            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">Total</span>
              <span className="text-2xl font-bold text-pink-600">
                ₹{totalAmount}
              </span>
            </div>
            <button
              onClick={() => {
                navigate(
                  `/booking/confirmation?movieId=${movieId}&city=${encodeURIComponent(
                    city,
                  )}&theatre=${encodeURIComponent(
                    theatre,
                  )}&time=${encodeURIComponent(
                    time,
                  )}&seats=${encodeURIComponent(seats)}`,
                );
              }}
              className="mt-6 w-full rounded-xl bg-pink-600 py-3 text-sm font-semibold text-white transition hover:bg-pink-700"
            >
              Pay ₹{totalAmount}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Payment;
