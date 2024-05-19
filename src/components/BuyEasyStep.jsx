import { FaSearch } from "react-icons/fa";
import { BsSunglasses } from "react-icons/bs";
import { FaCreditCard, FaTruck } from "react-icons/fa6";

const BuyEasyStep = () => {
  const buyingSteps = [
    {
      title: "Search you sunglass",
      text: "Shop Stylish Eyewear Now",
      icon: <FaSearch />,
    },
    {
      title: "Select Sunglass ",
      text: "Shade Your Style",
      icon: <BsSunglasses />,
    },
    {
      title: "Make Payment",
      text: "Securely Checkout Now",
      icon: <FaCreditCard />,
    },
    {
      title: "Received Product ",
      text: "See the World Clearly",
      icon: <FaTruck />,
    },
  ];
  return (
    <div className="max-w-[1321px] mx-auto flex justify-between pb-[150px]">
      {buyingSteps.map((step, i) => (
        <div
          className="flex flex-col items-center pt-[114px] px-[52px] relative"
          key={i}
        >
          <div className=" bg-[#fed29c] w-[130px] aspect-square rounded-full grid place-items-center text-4xl absolute top-0 -translate-y-1/2">
            {step.icon}
          </div>
          <h5 className="font-bold font-josefin mb-[10px]">{step.title}</h5>
          <p className="text-xs text-gray-500">{step.text}</p>
        </div>
      ))}
    </div>
  );
};

export default BuyEasyStep;
