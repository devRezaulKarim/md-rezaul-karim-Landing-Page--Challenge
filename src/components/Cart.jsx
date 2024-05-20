import { useCart } from "../context/GlobalState";
import CartCard from "./CartCard";

const Cart = () => {
  const { cartItems } = useCart();
  const subtotalPrice = cartItems.reduce((acc, curr) => {
    return (acc += curr.currentPrice * curr.quantity);
  }, 0);

  return (
    <div className="max-w-[1321px] mx-auto">
      <h1 className="lg:text-4xl font-bold font-josefin">Your Cart</h1>
      <div className="flex gap-8 ">
        <div className="lg:w-1/2 border rounded-lg px-4 divide-y-2 h-fit">
          {cartItems.map((item) => (
            <CartCard key={item.id} item={item} />
          ))}
        </div>

        <div className="lg:w-1/3 border rounded-lg p-4 h-fit">
          <h3 className="text-xl font-bold">Order Summary</h3>
          <div className="py-2">
            <p className="flex justify-between items-center mb-2">
              <span>Subtotal: </span>
              <span className="font-bold">${subtotalPrice}</span>
            </p>
            <p className="flex justify-between items-center">
              <span>Delivery Fee:</span> <span className="font-bold">$00</span>
            </p>
          </div>
          <div className="border-t-2 flex justify-between pt-2 pb-4">
            <p>Total: </p>
            <h3>${subtotalPrice}</h3>
          </div>

          <button className="bg-dark-gray text-white w-full py-2 rounded-full">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
