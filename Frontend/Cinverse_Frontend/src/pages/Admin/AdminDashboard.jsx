const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-[#f5f6f8] text-gray-900">

      <div className="flex min-h-screen">

        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 bg-[#111820] text-white lg:block">
          <div className="border-b border-white/10 px-6 py-5">
            <h1 className="text-xl font-bold">
              Cine<span className="text-pink-500">Verse</span>
            </h1>

            <p className="mt-1 text-xs text-gray-500">
              Admin Dashboard
            </p>
          </div>

          <nav className="p-4">

            <button className="w-full rounded-lg bg-pink-600 px-4 py-3 text-left text-sm font-semibold">
              Dashboard
            </button>

            <button className="mt-2 w-full rounded-lg px-4 py-3 text-left text-sm text-gray-400 transition hover:bg-white/5 hover:text-white">
              Movies
            </button>

            <button className="mt-2 w-full rounded-lg px-4 py-3 text-left text-sm text-gray-400 transition hover:bg-white/5 hover:text-white">
              Theatres
            </button>

            <button className="mt-2 w-full rounded-lg px-4 py-3 text-left text-sm text-gray-400 transition hover:bg-white/5 hover:text-white">
              Bookings
            </button>

            <button className="mt-2 w-full rounded-lg px-4 py-3 text-left text-sm text-gray-400 transition hover:bg-white/5 hover:text-white">
              Users
            </button>

          </nav>

          <div className="absolute bottom-0 w-64 border-t border-white/10 p-4">
            <button className="w-full rounded-lg px-4 py-3 text-left text-sm text-gray-400 hover:bg-white/5 hover:text-white">
              Logout
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">

          {/* Topbar */}
          <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6 lg:px-8">
            <div>
              <h2 className="text-lg font-bold">
                Dashboard
              </h2>

              <p className="text-xs text-gray-500">
                Overview of CineVerse
              </p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-100 text-sm font-bold text-pink-600">
              A
            </div>
          </header>

          <div className="p-6 lg:p-8">

            {/* Stats */}
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-sm text-gray-500">
                  Total Bookings
                </p>

                <p className="mt-3 text-3xl font-bold">
                  12,480
                </p>

                <p className="mt-2 text-xs font-medium text-green-600">
                  +12.5% this month
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-sm text-gray-500">
                  Revenue
                </p>

                <p className="mt-3 text-3xl font-bold">
                  ₹18.6L
                </p>

                <p className="mt-2 text-xs font-medium text-green-600">
                  +8.4% this month
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-sm text-gray-500">
                  Total Users
                </p>

                <p className="mt-3 text-3xl font-bold">
                  8,942
                </p>

                <p className="mt-2 text-xs font-medium text-green-600">
                  +6.2% this month
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-sm text-gray-500">
                  Movies
                </p>

                <p className="mt-3 text-3xl font-bold">
                  126
                </p>

                <p className="mt-2 text-xs text-gray-500">
                  Currently listed
                </p>
              </div>

            </div>

            {/* Lower Section */}
            <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">

              {/* Revenue Chart Placeholder */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold">
                      Revenue Overview
                    </h3>

                    <p className="mt-1 text-xs text-gray-500">
                      Monthly revenue performance
                    </p>
                  </div>

                  <select className="rounded-lg border border-gray-200 px-3 py-2 text-xs outline-none">
                    <option>Last 6 Months</option>
                    <option>Last 12 Months</option>
                  </select>
                </div>

                <div className="mt-8 flex h-64 items-end gap-4 border-b border-l border-gray-200 px-4 pb-0">

                  <div className="h-[35%] flex-1 rounded-t-md bg-pink-200" />
                  <div className="h-[48%] flex-1 rounded-t-md bg-pink-300" />
                  <div className="h-[42%] flex-1 rounded-t-md bg-pink-300" />
                  <div className="h-[65%] flex-1 rounded-t-md bg-pink-400" />
                  <div className="h-[58%] flex-1 rounded-t-md bg-pink-400" />
                  <div className="h-[82%] flex-1 rounded-t-md bg-pink-600" />

                </div>

                <div className="mt-3 flex justify-between px-4 text-[10px] text-gray-400">
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                </div>

              </div>

              {/* Top Movies */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

                <h3 className="font-bold">
                  Top Movies
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  Most booked movies this month
                </p>

                <div className="mt-6 space-y-5">

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold">
                        Jawan
                      </p>

                      <p className="text-xs text-gray-500">
                        2,840 bookings
                      </p>
                    </div>

                    <span className="text-sm font-bold text-pink-600">
                      ₹4.2L
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold">
                        Oppenheimer
                      </p>

                      <p className="text-xs text-gray-500">
                        2,120 bookings
                      </p>
                    </div>

                    <span className="text-sm font-bold text-pink-600">
                      ₹3.6L
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold">
                        Barbie
                      </p>

                      <p className="text-xs text-gray-500">
                        1,840 bookings
                      </p>
                    </div>

                    <span className="text-sm font-bold text-pink-600">
                      ₹3.1L
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold">
                        Spider-Man
                      </p>

                      <p className="text-xs text-gray-500">
                        1,420 bookings
                      </p>
                    </div>

                    <span className="text-sm font-bold text-pink-600">
                      ₹2.5L
                    </span>
                  </div>

                </div>

              </div>

            </div>

            {/* Recent Bookings */}
            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

              <h3 className="font-bold">
                Recent Bookings
              </h3>

              <div className="mt-5 overflow-x-auto">

                <table className="w-full min-w-[700px] text-left text-sm">

                  <thead>
                    <tr className="border-b border-gray-200 text-xs text-gray-500">
                      <th className="pb-3 font-medium">Booking ID</th>
                      <th className="pb-3 font-medium">Movie</th>
                      <th className="pb-3 font-medium">User</th>
                      <th className="pb-3 font-medium">Amount</th>
                      <th className="pb-3 font-medium">Status</th>
                    </tr>
                  </thead>

                  <tbody>

                    <tr className="border-b border-gray-100">
                      <td className="py-4 font-medium">CV-482931</td>
                      <td className="py-4">Jawan</td>
                      <td className="py-4 text-gray-500">Rahul Sharma</td>
                      <td className="py-4">₹530</td>
                      <td className="py-4">
                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600">
                          Confirmed
                        </span>
                      </td>
                    </tr>

                    <tr className="border-b border-gray-100">
                      <td className="py-4 font-medium">CV-482930</td>
                      <td className="py-4">Oppenheimer</td>
                      <td className="py-4 text-gray-500">Aman Verma</td>
                      <td className="py-4">₹780</td>
                      <td className="py-4">
                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600">
                          Confirmed
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td className="py-4 font-medium">CV-482929</td>
                      <td className="py-4">Barbie</td>
                      <td className="py-4 text-gray-500">Priya Singh</td>
                      <td className="py-4">₹500</td>
                      <td className="py-4">
                        <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-600">
                          Pending
                        </span>
                      </td>
                    </tr>

                  </tbody>

                </table>

              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;