import { stagger, motion } from "motion/react";
import Header from "./Header";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: stagger(0.3),
    },
  },
};

const item = {
  hidden: { opacity: 0, transform: "translateY(100px)" },
  show: { opacity: 1, transform: "translateY(0px)" },
};

function Hero() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="bg-no-repeat bg-contain bg-bottom h-screen relative overflow-hidden"
      style={{
        backgroundImage: "url(/cloud-bg.png)",
      }}
    >
      <motion.img
        variants={item}
        initial="hidden"
        animate="show"
        transition={{ delay: 1 }}
        src="/stacked_coins.png"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 object-contain -z-10 w-5/10"
      />

      {/* grid grid-cols-1 md:grid-cols-[auto_1fr] */}
      <Header />

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: [0.5, 1.1, 1] }}
        transition={{ delay: 0.5 }}
        className="-z-10 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 items-center mx-auto w-9/10 md:w-6/10 border-4 rounded-3xl border-primary-dark bg-black/80 flex flex-row p-10 lg:p-14  duration-500"
      >
        {/* shadow-[0_10px_10px_2px_#026ecf] */}
        <motion.img
          initial={{ opacity: 0, x: -75 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, ease: "easeInOut" }}
          src="/kinka.png"
          className="object-cover w-56 hidden lg:block"
        />

        <motion.div
          initial={{ opacity: 0, x: 75 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0, ease: "easeInOut" }}
          className="space-y-6"
        >
          <p className="text-3xl lg:text-5xl uppercase shadowed-header text-center md:text-left">
            Introduction
          </p>
          <p className="text-xs lg:text-sm text-center lg:text-left">
            Kinkajou Token was initially launched on July 10, 2023, on the
            Binance Smart Chain, leveraging its fast block times and lower gas
            fees compared to Ethereum. The project aimed to bring cryptocurrency
            to the average person while supporting those in need. However, it
            failed to achieve its goals due to errors in the contract address.
            Learning from meme token predecessors like Wikicat, Ocicat,
            BabyDoge, and Shiba Inu born from online meme communities-Kinkajou
            Token has evolved. Its deflationary mechanism triggers auto-burns
            with every buy, reducing total supply and potentially increasing
            value.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
