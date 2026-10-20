import earth from "../../assets/images/earth.webp";

export const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${earth})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className=" relative z-10 max-w-[95%] m-auto py-12 md:py-20  text-white">
        <p className="text-gray-300 text-xs md:text-sm my-1">EXPLORE . LEARN . DISCOVER</p>
        <h1 className="text-4xl md:text-5xl font-bold  ">
          Explore The <span className="text-blue-500">World</span>
        </h1>
        <p className=" my-1 text-xs md:text-sm  text-gray-300">
          Discover countries, cultures and places <br /> around the globe.
        </p>
      </div>
    </section>
  );
};
