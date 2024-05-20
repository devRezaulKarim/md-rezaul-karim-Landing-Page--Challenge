import Button from "./Button";
import bannerImage from "../assets/hero.png";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const bannerSlides = Array.from({ length: 3 });
  return (
    <div className="bg-[#eaeaea] banner">
      <div className="container mx-auto h-[918px]">
        <Slider className="" {...settings}>
          {bannerSlides.map((n, i) => (
            <div key={i} className="h-[918px]">
              <div className="bg-no-repeat h-full relative bg-bottom w-[85%] mx-auto">
                <div
                  className={`max-w-[1321px] ml-auto grid place-content-end h-full mt-auto px-[149px]`}
                >
                  <img src={bannerImage} alt="Banner Image" />
                </div>

                <div className="absolute left-0 top-1/2 -translate-y-1/2">
                  <h1 className="font-josefin text-5xl font-bold w-[556px] mb-[52px]">
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
