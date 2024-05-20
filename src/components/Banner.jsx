import Button from "./Button";
import bannerImage from "../assets/hero.png";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnDotsHover: false,
  };
  const bannerSlides = Array.from({ length: 3 });
  return (
    <div className="bg-[#eaeaea] banner">
      <div className="container mx-auto h-[60vh] md:h-[70vh] lg:h-[918px]">
        <Slider {...settings}>
          {bannerSlides.map((n, i) => (
            <div key={i} className="h-[60vh] md:h-[70vh] lg:h-[918px]">
              <div className="bg-no-repeat h-full relative bg-bottom lg:w-[85%] mx-auto">
                <div
                  className={`max-w-[1321px] ml-auto grid place-content-end h-full mt-auto lg:px-[149px] px-4`}
                >
                  <img src={bannerImage} alt="Banner Image" />
                </div>

                <div className="absolute flex flex-col items-center lg:block lg:left-0  lg:-translate-x-0  bottom-10 md:bottom-14 lg:bottom-1/2 lg:translate-y-1/2 w-full">
                  <h1 className="font-josefin text-3xl md:text-5xl font-bold  md:w-[556px] mb-4 lg:mb-[52px] text-center lg:text-start">
                    Personalized Eyeglass Shopping
                  </h1>
                  <Button icon={true}>Buy Now</Button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
