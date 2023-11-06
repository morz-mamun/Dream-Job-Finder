import Marquee from "react-fast-marquee";
import banner1 from "../../../assets/banner1.jpg";
import banner2 from "../../../assets/banner2.jpg";

const Banner = () => {
  return (
    <div
      className="hero place-items-start min-h-screen relative"
      style={{
        backgroundImage: `url('${banner1}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="text-white absolute top-10 lg:left-44">
        <h1 className="mb-5 text-2xl md:text-5xl font-bold">Find The Right Jobs.</h1>
        <p className="mb-5 text-sm md:text-base">
          Get Free And Premium Courses To Develop Yourself.
        </p>
      </div>
    </div>
  );
};

export default Banner;
