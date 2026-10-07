import { Link } from "react-router-dom";

const Profile = () => {
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
            Profile
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Manage your personal information and account details.
          </p>
        </div>

        {/* Profile Layout */}
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
                className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
              >
                My Bookings
              </Link>

              <Link
                to="/profile"
                className="block rounded-lg bg-pink-50 px-4 py-3 text-sm font-semibold text-pink-600 shadow-sm"
              >
                Profile
              </Link>
            </div>
          </div>

          {/* Profile Information */}
          <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
            {/* Personal Information Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  Personal Information
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Update your account information.
                </p>
              </div>

              <button className="rounded-lg bg-pink-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-pink-700 hover:shadow-md hover:shadow-pink-600/20">
                Edit Profile
              </button>
            </div>

            {/* Personal Information */}
            <div className="mt-8 grid gap-7 sm:grid-cols-2">
              {/* Full Name */}
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                <p className="text-xs text-gray-500">Full Name</p>

                <p className="mt-2 text-sm font-semibold text-gray-900">
                  CineVerse User
                </p>
              </div>

              {/* Email */}
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                <p className="text-xs text-gray-500">Email Address</p>

                <p className="mt-2 text-sm font-semibold text-gray-900">
                  user@example.com
                </p>
              </div>

              {/* Phone */}
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                <p className="text-xs text-gray-500">Phone Number</p>

                <p className="mt-2 text-sm font-semibold text-gray-900">
                  +91 98765 43210
                </p>
              </div>

              {/* Location */}
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                <p className="text-xs text-gray-500">Location</p>

                <p className="mt-2 text-sm font-semibold text-gray-900">
                  Bhopal, India
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="my-10 border-t border-gray-200" />

            {/* Account Information */}
            <div>
              <h2 className="text-xl font-bold tracking-tight">
                Account Information
              </h2>

              <div className="mt-6 grid gap-7 sm:grid-cols-2">
                {/* Account Status */}
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                  <p className="text-xs text-gray-500">Account Status</p>

                  <p className="mt-2 text-sm font-semibold text-green-600">
                    Active
                  </p>
                </div>

                {/* Member Since */}
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                  <p className="text-xs text-gray-500">Member Since</p>

                  <p className="mt-2 text-sm font-semibold text-gray-900">
                    September 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
