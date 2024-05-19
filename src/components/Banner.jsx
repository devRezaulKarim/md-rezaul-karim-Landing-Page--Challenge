import Button from "./Button";
import bannerImage from "../assets/hero.png";

const Banner = () => {
  return (
    <div className="bg-[#eaeaea] ">
      <div className=" max-w-[1321px] mx-auto h-[918px] flex items-center bg-no-repeat bg-center">
        <div className={`w-full grid place-content-center`}>
          <img src={bannerImage} alt="Banner Image" />
        </div>

        <div className="absolute">
          <h1 className="font-poppins text-4xl font-bold w-[556px] mb-[52px]">
            Personalized Eyeglass Shopping
          </h1>
          <Button icon={true}>Buy Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
