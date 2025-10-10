import { useAnimation, useInView, motion } from "motion/react";
import { useEffect, useRef } from "react";

function Vision() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [mainControls, isInView]);

  return (
    <section className="bg-white py-24" id="vision">
      <div
        ref={containerRef}
        className="w-9/10 md:w-8/10 max-w-7xl mx-auto text-center flex flex-col items-center space-y-10"
      >
        <motion.p
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: {
              opacity: 0,
              y: 75,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{ delay: 0.5 }}
          className="text-3xl lg:text-5xl uppercase shadowed-header"
        >
          Vision
        </motion.p>
        <motion.p
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: {
              opacity: 0,
              y: 75,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{ delay: 0.7 }}
          className="text-black/48 text-xl md:text-2xl"
        >
          Kinkajou Token is dedicated to building a vibrant, inclusive
          decentralized finance (DeFi) ecosystem on the Binance Smart Chain. Its
          deflationary, auto-liquidity pool token is designed to create value
          through cutting-edge DeFi solutions, yield farming, gaming, and
          payment systems.
        </motion.p>
        <motion.button
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: {
              opacity: 0,
              y: 75,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{ delay: 0.9 }}
          className="text-lg border-3 bg-primary-dark border-black rounded-2xl! py-2!"
          style={{
            boxShadow: "0px 2px 2px 1px #026ecf",
          }}
        >
          Learn more
        </motion.button>
      </div>
    </section>
  );
}

export default Vision;
