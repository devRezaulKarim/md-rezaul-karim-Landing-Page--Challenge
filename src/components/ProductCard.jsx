/* eslint-disable react/prop-types */
const ProductCard = ({
  product: { img, title, previousPrice, currentPrice },
}) => {
  return (
    <div className="font-josefin h-[636px] hover:-translate-y-5 duration-200">
      <div className="bg-[#f7f7f7] h-[475px] grid place-items-center px-[35px] mb-[30px]">
        <img src={img} alt="" />
      </div>
      <p className="text-2xl">{title}</p>
      <p className="mt-[10px] mb-[20px] text-lg flex items-center gap-2">
        <span className="font-bold">${currentPrice}</span>
        {previousPrice && (
          <span className="text-gray-400 line-through">${previousPrice}</span>
        )}
      </p>
      <button className="relative after:content-[''] after:h-[2px] after:w-0 hover:after:w-full after:bg-black after:absolute after:bottom-0 after:left-0 after:duration-200">
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
