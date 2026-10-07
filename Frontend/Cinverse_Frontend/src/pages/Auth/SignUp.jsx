import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Left - Promotional Panel */}
        <div className="hidden bg-[#111820] lg:flex lg:items-center lg:justify-center">
          <div className="max-w-md px-10 text-center text-white">

            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-pink-600 text-4xl shadow-lg">
              🎬
            </div>

            <h2 className="mt-8 text-3xl font-bold">
              Welcome to
              <br />
              CineVerse
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-400">
              Create your account and discover movies,
              theatres and a simple way to book your
              favourite seats.
            </p>

            <div className="mt-8 flex justify-center gap-3">
              <span className="rounded-full bg-white/10 px-4 py-2 text-xs text-gray-300">
                🎟 Easy Booking
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-xs text-gray-300">
                🎬 Discover Movies
              </span>
            </div>

          </div>
        </div>

        {/* Right - Form */}
        <div className="flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">

            {/* Logo */}
            <Link to="/" className="text-2xl font-bold">
              Cine<span className="text-pink-600">Verse</span>
            </Link>

            <div className="mt-10">
              <p className="text-sm font-medium text-pink-600">
                GET STARTED
              </p>

              <h1 className="mt-2 text-3xl font-bold text-gray-900">
                Create your account
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                Join CineVerse and start booking your
                favourite movies.
              </p>
            </div>

            {/* Form */}
            <form className="mt-8 space-y-5">

              {/* Full Name */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
                />
              </div>

              {/* Password */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Create a password"
                  className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Confirm Password
                </label>

                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
                />
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-pink-600"
                />

                <p className="text-xs leading-5 text-gray-500">
                  I agree to the CineVerse terms and
                  conditions.
                </p>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-pink-600 py-3 text-sm font-semibold text-white transition hover:bg-pink-700"
              >
                Create Account
              </button>

            </form>

            {/* Login */}
            <p className="mt-8 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-pink-600 hover:text-pink-700"
              >
                Login
              </Link>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default SignUp;