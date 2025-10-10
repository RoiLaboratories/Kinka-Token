import { motion, stagger } from "motion/react";

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
  hidden: { opacity: 0, transform: "translateY(-100px)" },
  show: { opacity: 1, transform: "translateY(0px)" },
};

function SplashScreen() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="text-white bg-white font-semibold flex-center relative h-[100dvh] p-10"
    >
      <div>
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: [0.8, 1, 0.8] }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,

            // repeatDelay: 1,
          }}
          src="/logo.png"
          className="object-contain size-64"
        />
      </div>
      <motion.p
        variants={item}
        transition={{ delay: 0.3 }}
        className="absolute bottom-10 w-full text-center text-primary-dark md:text-lg"
      >
        Welcome to Kinkajou Token
      </motion.p>
    </motion.div>
  );
}

export default SplashScreen;
