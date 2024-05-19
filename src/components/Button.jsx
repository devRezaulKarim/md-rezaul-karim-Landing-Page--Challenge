/* eslint-disable react/prop-types */
import { FaCartShopping } from "react-icons/fa6";

const Button = ({ icon, children }) => {
  return (
    <button
      className={`font-poppins bg-dark-gray px-10 py-[14px] rounded-lg text-white  ${
        icon && "flex items-center gap-[10px]"
      }`}
    >
      {icon && <FaCartShopping />}
      {children}
    </button>
  );
};

export default Button;
