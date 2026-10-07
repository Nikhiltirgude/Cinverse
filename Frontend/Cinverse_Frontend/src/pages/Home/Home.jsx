import Navbar from "../../components/common/Navbar";
import HeroSection from "../../components/home/HeroSection";
import MovieCarousel from "../../components/home/MovieCarousel";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0f1720] text-white">
      <Navbar />

      <main>
        <HeroSection />

        <MovieCarousel />
      </main>
    </div>
  );
};


export default Home;