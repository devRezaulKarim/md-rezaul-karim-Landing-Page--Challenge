/* eslint-disable react/prop-types */
import { FaRegHeart } from "react-icons/fa6";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCart } from "../context/GlobalState";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useCart();
  const handleAddToCart = (product) => {
    addItemToCart(product);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="font-josefin h-[636px] hover:-translate-y-5 duration-200 relative rounded ">
      {product.discount && (
        <span className="text-sm font-bold px-[17px] py-[20px]  rounded-full bg-[#fed29c] absolute top-8 left-8 grid place-items-center">
          {product.discount}%
        </span>
      )}
      <span className="text-2xl p-[15px] border-2 border-black rounded-full absolute top-8 right-8">
        <FaRegHeart />
      </span>
      <div className="bg-[#f7f7f7] h-[475px]  px-[35px] mb-[30px]">
        <Slider {...settings}>
          <div className="h-[430px] w-full">
            <div className="h-full grid place-items-center">
              <img className="" src={product.img} alt="" />
            </div>
          </div>
          <div className="h-[430px] w-full">
            <div className="h-full grid place-items-center">
              <img className="" src={product.img} alt="" />
            </div>
          </div>
          <div className="h-[430px] w-full">
            <div className="h-full grid place-items-center">
              <img className="" src={product.img} alt="" />
            </div>
          </div>
        </Slider>

        {/* <img src={img} alt="" /> */}
      </div>
      <p className="text-3xl">{product.title}</p>
      <p className="mt-[10px] mb-[20px] text-lg flex items-center gap-2">
        <span className="font-bold text-lg">${product.currentPrice}</span>
        {product.previousPrice && (
          <span className="text-gray-400 line-through">
            ${product.previousPrice}
          </span>
        )}
      </p>
      <button
        onClick={() => handleAddToCart(product)}
        className="relative after:content-[''] after:h-[2px] after:w-0 hover:after:w-full after:bg-black after:absolute after:bottom-0 after:left-0 after:duration-200"
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
