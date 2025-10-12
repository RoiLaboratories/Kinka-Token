import { Icon } from "@iconify/react";
import { useAnimation, useInView, motion } from "motion/react";
import { useEffect, useRef } from "react";

const data = [
  "Liquidity: 200,000,000 (40%)",
  "Reserve and Development: 100,000,000 (20%)",
  "Marketing: 50,000,000 (10%)",
  "CEX Listing: 50,000,000 (10%)",
  "Charity: 25,000,000 (5%)",
  "Team: 20,000,000 (4%)",
  "Airdrop: 55,000,000 (11%)",
];

function Tokenomics() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [mainControls, isInView]);

  return (
    <section className="bg-white py-24" id="tokenomics">
      <div
        ref={containerRef}
        className="flex flex-row flex-wrap mx-auto max-w-7xl px-10 gap-5"
      >
        <motion.img
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: {
              opacity: 0,
              x: -75,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          transition={{ delay: 0.2 }}
          src="/tokenomics.png"
          className="w-96"
        />
        <div className="space-y-8 flex-1">
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
            transition={{ delay: 0.4 }}
            className="text-3xl lg:text-5xl uppercase shadowed-header text-center"
          >
            TOKENOMICS
          </motion.p>
          <motion.div
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
            transition={{ delay: 0.6 }}
            className="rounded-2xl px-8 py-12 space-y-14 bg-black border-3 border-white shadow-[0_4px_2px_1px_#026ecf] hover:shadow-[0_12px_10px_2px_#026ecf] hover:-translate-y-[5px] duration-500"
            // style={{
            //   boxShadow: "0px 4px 2px 1px #026ecf",
            // }}
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
              transition={{
                delay: 0.7,
              }}
              className="text-center text-lg md:text-xl"
            >
              Total Supply: 500,000,000 (500M KINKA)
            </motion.p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 space-y-4">
              {data.map((item, i) => (
                <motion.li
                  animate={mainControls}
                  initial="hidden"
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 100,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  transition={{
                    delay: 0.7 + i * 0.15,
                    duration: 0.3,
                  }}
                  className="flex items-center gap-4"
                  key={i}
                >
                  <span>
                    {/* <input
                      type="checkbox"
                      checked
                      readOnly
                      className="checked:accent-primary-dark size-4"
                    /> */}
                    <Icon
                      icon="mingcute:hand-finger-fill"
                      className="rotate-90 text-primary-dark"
                      fontSize={24}
                    />
                  </span>
                  <p className="text-sm md:text-base">{item}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Tokenomics;
