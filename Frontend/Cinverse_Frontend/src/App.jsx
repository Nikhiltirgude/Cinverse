import { Routes, Route } from "react-router-dom";
import MovieDetails from "./pages/Movies/MovieDetails";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import SelectCity from "./pages/Booking/SelectCity";
import ShowTimes from "./pages/Booking/ShowTimes";
import SeatSelection from "./pages/Booking/SeatSelection";
import Payment from "./pages/Booking/Payment";
import BookingConfirmation from "./pages/Booking/BookingConfirmation";
import MyBookings from "./pages/User/MyBookings";
import Profile from "./pages/User/Profile";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import AdminDashboard from "./pages/Admin/AdminDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:id" element={<MovieDetails />} />
      <Route path="/booking" element={<SelectCity />} />
      <Route path="/booking/showtimes" element={<ShowTimes />} />
      <Route path="/booking/seats" element={<SeatSelection />} />
      <Route path="/booking/payment" element={<Payment />} />
      <Route path="/booking/confirmation" element={<BookingConfirmation />} />
      <Route path="/my-bookings" element={<MyBookings />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;
