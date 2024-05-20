/* eslint-disable react/prop-types */
import { FaMinus, FaPlus, FaTrashCan } from "react-icons/fa6";
import { useCart } from "../context/GlobalState";

const CartCard = ({ item: { id, img, title, currentPrice, quantity } }) => {
  const { removeItemFromCart, increaseQuantity, decreaseQuantity } = useCart();
  return (
    <div className="flex justify-between py-4 min-h-24">
      <div className="flex gap-4">
        <div className="w-16 lg:w-32 bg-[#eaeaea] p-2 rounded-lg grid place-items-center">
          <img src={img} alt="" />
        </div>

        <div className="flex flex-col justify-between">
          <h3 className="text-base lg:text-xl font-bold">{title}</h3>
          <p className="font-bold text-sm lg:text-lg">${currentPrice}</p>
        </div>
      </div>

      <div className="flex flex-col justify-between items-end">
        <button onClick={() => removeItemFromCart(id)}>
          <FaTrashCan className="text-red-500" />
        </button>
        <p className="bg-[#eaeaea] px-2 lg:px-4 flex items-center rounded-full py-1">
          <button
            className="text-sm lg:text-base active:scale-50"
            onClick={() => decreaseQuantity(id)}
          >
            <FaMinus />
          </button>
          <span className="px-2 lg:px-4">{quantity}</span>
          <button
            className="text-sm lg:text-base active:scale-50"
            onClick={() => increaseQuantity(id)}
          >
            <FaPlus />
          </button>
        </p>
      </div>
    </div>
  );
};

export default CartCard;
