import { Icon } from "@iconify/react";
import { useAnimation, useInView, motion } from "motion/react";
import { useEffect, useRef } from "react";

const mapData = [
  {
    title: "Development and Launch",
    list: [
      "Smart contract development",
      "Token distribution",
      "Decentralized exchange listing",
      "Marketing campaigns",
      "CG/CMC listing",
    ],
  },
  {
    title: "Platform Growth",
    list: [
      "Kinka Farm and Kinka Pot development",
      "Strategic partnerships",
      "Security audit",
      "Centralized exchange listing",
      "Community building",
    ],
  },
  {
    title: "Expansion & Integration",
    list: [
      " Integrate Kinkajou token with blockchains like Ethereum for greater interoperabilty",
      "Develop new DeFi products to enhance token utility",
      "Introduce a governance system for token holder voting",
    ],
  },
];
// grid grid-cols-[auto_1fr]
function Roadmap() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [mainControls, isInView]);

  return (
    <section className="bg-white pt-12" id="roadmap">
      <div
        ref={containerRef}
        className="mx-auto max-w-7xl pl-12 md:pl-14 flex flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-16 bg-black"
      >
        {/*section--1 */}
        <motion.div
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
          className="grid relative"
        >
          <img
            src="/coin-3.png"
            className="min-w-24 lg:min-w-28 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              boxShadow: "0px 0px 20px 3px rgb(255, 239, 150)",
              // boxShadow: "0px 5px 5px 3px #026ecf",
            }}
          />

          <span className="w-1.5 bg-white" />
        </motion.div>

        {/*section--2 */}
        <div className="space-y-5 py-6">
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
            ROADMAP
          </motion.p>
          {/* -translate-y-[10%] */}
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-10 px-10">
            {/*MAP ITEMS */}
            {mapData.map(({ list, title }, i) => {
              const isOdd = i % 2 !== 0;
              return (
                <motion.div
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
                    delay: 0.6 + i * 0.15,
                    duration: 0.3,
                  }}
                  key={i}
                  className={`${isOdd && "md:rotate-180 md:-mt-[10%]"}`}
                >
                  <div className="relative h-14">
                    <Icon
                      icon="fluent:animal-paw-print-20-filled"
                      fontSize={65}
                      className="absolute left-1/2 -bottom-2 -translate-x-1/2 text-primary-dark"
                    />
                  </div>
                  <div className="h-20 relative">
                    <span className="w-1.5 h-full bg-white absolute left-1/2 -translate-x-1/2" />
                  </div>
                  <div
                    className={` bg-primary-dark rounded-2xl p-6 space-y-4 ${
                      isOdd && "md:rotate-180"
                    }`}
                    style={{
                      boxShadow: "0px 2px 2px 1px #fff",
                    }}
                  >
                    <p className="text-center">{title}</p>
                    <ul className="text-sm list-decimal list-inside space-y-2">
                      {list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <button
                      className="text-lg mx-auto border-2 bg-white border-black rounded-full! p-1.5!"
                      style={{
                        boxShadow: "0px 2px 2px 1px #fff",
                      }}
                    >
                      <Icon
                        icon="ic:round-double-arrow"
                        fontSize={25}
                        color="#026ecf"
                      />
                    </button>
                  </div>
                </motion.div>
              );
            })}

            {/*last content */}
            <motion.div
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
                duration: 0.3,
                delay: 0.6 + mapData.length * 0.15,
              }}
              className="md:rotate-180 md:mt-[10%]"
            >
              <div className="relative h-14">
                <Icon
                  icon="fluent:animal-paw-print-20-filled"
                  fontSize={65}
                  className="absolute left-1/2 -bottom-2 -translate-x-1/2 text-primary-dark"
                />
              </div>
              <div className="h-20 relative">
                <span className="w-1.5 h-full bg-white absolute left-1/2 -translate-x-1/2" />

                {/* <span className="w-1.5 h-full bg-white absolute left-1/2 -translate-x-1/2" />
                <Icon
                  icon="fluent:animal-paw-print-20-filled"
                  fontSize={50}
                  className=" absolute -translate-y-full left-1/2 -translate-x-1/2"
                /> */}
              </div>
              <div className=" bg-primary-dark rounded-2xl p-6 space-y-4 md:rotate-180">
                <p className="text-center">Mass Adoption & Charity</p>
                <ul className="text-sm list-decimal list-inside space-y-2">
                  <li>Expand globally, targeting emerging markets</li>
                  <li>Launch a mobile app for easy platform access</li>
                  <li>Enable merchants to accept $KINKA as payment</li>
                  <li>Enable merchants to accept $KINKA as payment</li>
                </ul>
                <a
                  target="_blank"
                  referrerPolicy="no-referrer"
                  href={
                    "https://drive.google.com/file/d/1B_lRnWuGnNSEECdBQ60CA4qTfAIWscy7/view?usp=sharing"
                  }
                  className=" mx-auto border-2 text-primary-dark text-xs bg-white rounded-xl! border-black px-3! button w-fit"
                  style={{
                    boxShadow: "0px 2px 2px 1px #fff",
                  }}
                >
                  Learn more
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
