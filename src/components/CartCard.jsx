/* eslint-disable react/prop-types */
import { FaMinus, FaPlus, FaTrashCan } from "react-icons/fa6";

const CartCard = ({ item: { img, title, currentPrice, quantity } }) => {
  return (
    <div className="flex justify-between py-4">
      <div className="flex gap-4">
        <div className="w-32 bg-[#eaeaea] p-2 rounded-lg">
          <img src={img} alt="" />
        </div>

        <div className="flex flex-col justify-between">
          <h3 className="text-xl">{title}</h3>
          <p className="font-bold text-lg">${currentPrice}</p>
        </div>
      </div>

      <div className="flex flex-col justify-between items-end">
        <button>
          <FaTrashCan className="text-red-500" />
        </button>
        <p className="bg-[#eaeaea] px-4 flex items-center rounded-full py-1">
          <button>
            <FaMinus />
          </button>
          <span className="px-4">{quantity}</span>
          <button>
            <FaPlus />
          </button>
        </p>
      </div>
    </div>
  );
};

export default CartCard;
