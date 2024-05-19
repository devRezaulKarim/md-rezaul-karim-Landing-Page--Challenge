import Button from "./Button";

/* eslint-disable react/prop-types */
const TypeCard = ({ type: { image, title, text } }) => {
  return (
    <div className="relative  font-josefin ">
      <img src={image} alt="" />
      <div className="bg-white rounded-lg absolute bottom-10 py-5 lg:py-8 w-4/5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-[15px]">
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="text-xs">{text}</p>
        <Button>Buy Now</Button>
      </div>
    </div>
  );
};

export default TypeCard;
