import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left - Form */}
        <div className="flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold">
              Cine<span className="text-pink-600">Verse</span>
            </Link>

            <div className="mt-10">
              <p className="text-sm font-medium text-pink-600">WELCOME BACK</p>

              <h1 className="mt-2 text-3xl font-bold text-gray-900">
                Login to your account
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                Continue your movie journey with CineVerse.
              </p>
            </div>

            {/* Form */}
            <form className="mt-8 space-y-5">
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

              <div>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs font-medium text-pink-600 hover:text-pink-700"
                  >
                    Forgot Password?
                  </button>
                </div>

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-pink-600 py-3 text-sm font-semibold text-white transition hover:bg-pink-700"
              >
                Login
              </button>
            </form>

            {/* Sign Up */}
            <p className="mt-8 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-semibold text-pink-600 hover:text-pink-700"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>

        {/* Right - Promotional Panel */}
        <div className="hidden bg-[#111820] lg:flex lg:items-center lg:justify-center">
          <div className="max-w-md px-10 text-center text-white">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-pink-600 text-4xl shadow-lg">
              🎬
            </div>

            <h2 className="mt-8 text-3xl font-bold">
              Your Movies.
              <br />
              Your Moments.
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-400">
              Discover movies, choose your favourite seats and book your next
              cinematic experience with CineVerse.
            </p>

            <div className="mt-8 flex justify-center gap-3">
              <span className="rounded-full bg-white/10 px-4 py-2 text-xs text-gray-300">
                🎟 Easy Booking
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-xs text-gray-300">
                🍿 Great Movies
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
