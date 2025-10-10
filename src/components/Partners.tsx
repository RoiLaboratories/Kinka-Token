import { useAnimation, useInView, motion } from "motion/react";
import { useEffect, useRef } from "react";
import Slider from "react-slick";

const slides = [
  { image: "/bnb.png", title: "BNB SMARTCHAIN" },
  { image: "/smc.png", title: "smc dao" },
  { image: "/pancake.png", title: "pancakeswap" },
  { image: "/mprofy.png", title: "MPROFY DAO" },
  { image: "/kjc.png", title: "KJC CALLS" },
  { image: "/bnb.png", title: "BNB SMARTCHAIN" },
  { image: "/smc.png", title: "smc dao" },
  { image: "/pancake.png", title: "pancakeswap" },
  { image: "/mprofy.png", title: "MPROFY DAO" },
  { image: "/kjc.png", title: "KJC CALLS" },
];
//  slidesToShow: 5,
//     slidesToScroll: 2,
function Partners() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [mainControls, isInView]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
        },
      },
    ],
  };

  return (
    <section className="bg-white pb-28" id="partners">
      <div ref={containerRef} className=" mx-auto max-w-7xl space-y-8">
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
          OUR PARTNERS
        </motion.p>
        <div className="bg-primary-dark/70">
          <Slider {...settings}>
            {slides.map(({ image, title }, i) => (
              <div key={i} className="space-y-3 py-10">
                <img
                  src={image}
                  className="mx-auto object-contain size-12 md:size-[80px]"
                  // style={{ width: 80, height: 80 }}
                />
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-center uppercase line-clamp-2 ">
                  {title}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Partners;
