import { stagger, motion } from "motion/react";
import { Link as ScrollLink } from "react-scroll";

const links = [
  { label: "Vision", path: "vision" },
  { label: "Roadmap", path: "roadmap" },
  { label: "Tokenomics", path: "tokenomics" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: stagger(0.3),
    },
  },
};

function Header() {
  return (
    <header
      className="header"
      style={{
        backgroundImage:
          "linear-gradient(to right, #FAF6FF 0%, #7CB1E7 46%, #026ECF 100%)",
      }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-[95%] md:max-w-7xl flex items-center justify-between"
      >
        <motion.img
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          src="/logo.png"
          className="w-10 h-12 md:w-24 md:h-20 object-contain"
        />

        <nav className="space-x-3 md:space-x-6 flex items-center">
          <ul className="space-x-6 hidden md:flex items-center lg:space-x-10">
            {links.map(({ label, path }, i) => (
              <motion.li
                initial={{ opacity: 0, y: 75 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3 + i * 0.3,
                }}
                key={i}
              >
                <ScrollLink
                  to={path}
                  smooth
                  spy
                  duration={300}
                  className="cursor-pointer"
                  activeClass="text-blue-900"
                >
                  {label}
                </ScrollLink>
              </motion.li>
            ))}
          </ul>

          <motion.a
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            target="_blank"
            referrerPolicy="no-referrer"
            href={
              "https://pancakeswap.finance/swap?chain=bsc&inputCurrency=BNB&outputCurrency=0x4CF42771B73dACb4C2c78790dA77D64a9ae6bdBd&exactAmount=&exactField=INPUT"
            }
            className="border-3 bg-transparent hover:bg-white text-white border-black hover:text-primary-dark py-1! md:py-1.5! button hover:shadow-[0_5px_5px_#fff] hover:-translate-y-[3px] duration-500!"
          >
            Buy KINKA
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            target="_blank"
            referrerPolicy="no-referrer"
            href={
              "https://drive.google.com/file/d/1B_lRnWuGnNSEECdBQ60CA4qTfAIWscy7/view?usp=sharing"
            }
            className="border-3 bg-white hover:bg-primary-dark hover:text-white border-black text-primary-dark py-1! md:py-1.5! button hover:shadow-[0_5px_5px_#fff] hover:-translate-y-[3px] duration-500!"
          >
            Whitepaper
          </motion.a>
        </nav>
      </motion.div>
    </header>
  );
}

export default Header;
