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
import { Icon } from "@iconify/react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "motion/react";

const CONTRACT_ADDRESS = "0x4CF42771B73dACb4C2c78790dA77D64a9ae6bdBd";

function App() {
  const [headerActive, setHeaderActive] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const header = document.querySelector(".header");
    const headerHeight = header?.getBoundingClientRect().height || 80;

    const handleScroll = () => {
      console.log(headerHeight);
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

  async function copyToClipboard(text: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard!");
    } catch {
      toast.error("Failed to copy");
    }
  }

  return (
    <>
      <Toaster
        gutter={12}
        toastOptions={{
          success: {
            duration: 1000,
            style: {
              background: "#026ecf",
              color: "white",
            },
            // iconTheme: {
            //   primary: "#026ecf",
            //   secondary: "#fff",
            // },
          },
          error: {
            duration: 1000,
            style: {
              background: "#ef4444",
              color: "white",
            },
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
          },
        }}
      />
      <div className="grid grid-cols-1 min-h-screen w-full">
        {/*dynamic header */}
        <div
          className={`fixed transition-transform duration-500 top-0 left-0 right-0 z-50 ${
            headerActive ? "show " : "hide"
          }`}
        >
          <Header />
        </div>
        <Hero />
        <Vision />
        <Roadmap />
        <Tokenomics />
        <div className="bg-white py-24">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 100,
              },
              show: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="rounded-2xl px-8 py-12  bg-black border-3 border-white shadow-[0_4px_2px_1px_#026ecf] hover:shadow-[0_12px_10px_2px_#026ecf] hover:-translate-y-[5px] duration-500 w-9/10 lg:max-w-1/2 mx-auto text-center space-y-4 text-base sm:text-lg md:text-2xl"
          >
            <p>Tax:&nbsp;&nbsp;4% Buy/ 4% Sell</p>
            <p>Contract address renounced</p>
            <div>
              <p>Contract Address:&nbsp;&nbsp;</p>
              <p
                className="text-wrap text-xs sm:text-lg flex items-center gap-2 justify-center cursor-pointer"
                onClick={() => copyToClipboard(CONTRACT_ADDRESS)}
              >
                {CONTRACT_ADDRESS}
                <Icon icon={"lucide:copy"} className="text-primary" />
              </p>
            </div>
            <div>
              <p>
                Rewards Tokens: &nbsp;&nbsp;Wikicat Coin
                <span className="text-primary">&nbsp;($WKC) </span> and Giant
                Token <span className="text-primary">&nbsp;($GTAN) </span>
              </p>
            </div>
          </motion.div>
        </div>
        <Partners />
        <Footer />
      </div>
    </>
  );
}

export default App;
