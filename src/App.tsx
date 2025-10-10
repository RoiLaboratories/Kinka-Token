import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Roadmap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";
import Vision from "./components/Vision";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import SplashScreen from "./components/SplashScreen";

function App() {
  const [headerActive, setHeaderActive] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const header = document.querySelector(".header");
    const headerHeight = header?.getBoundingClientRect().height;

    const handleScroll = () => {
      setHeaderActive(window.scrollY > headerHeight!);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <main className="grid grid-cols-1 min-h-screen w-full">
      {/*dynamic header */}
      <div
        className={`fixed w-full transition-transform duration-500 top-0 left-0 right-0 z-50 ${
          headerActive ? "translate-y-0 visible" : "-translate-y-full invisible"
        }`}
      >
        <Header />
      </div>
      <Hero />
      <Vision />
      <Roadmap />
      <Tokenomics />
      <Partners />
      <Footer />
    </main>
  );
}

export default App;
