import { useCart } from "../context/GlobalState";
import CartCard from "../components/CartCard";

const Cart = () => {
  const { cartItems } = useCart();
  const subtotalPrice = cartItems.reduce((acc, curr) => {
    return (acc += curr.currentPrice * curr.quantity);
  }, 0);

  return (
    <div className="max-w-[1321px] mx-auto px-4">
      <h1 className="text-3xl lg:text-4xl font-bold font-josefin">Your Cart</h1>
      {cartItems.length > 0 ? (
        <div className="md:flex md:gap-4 lg:gap-8 ">
          <div className="md:w-1/2 border rounded-lg px-4 divide-y-2 h-fit">
            {cartItems.map((item) => (
              <CartCard key={item.id} item={item} />
            ))}
          </div>

          <div className="md:w-2/5 lg:w-1/3 border rounded-lg p-4 h-fit mt-8 lg:mt-0">
            <h3 className="text-xl font-bold">Order Summary</h3>
            <div className="py-2">
              <p className="flex justify-between items-center mb-2">
                <span>Subtotal: </span>
                <span className="font-bold">${subtotalPrice}</span>
              </p>
              <p className="flex justify-between items-center">
                <span>Delivery Fee:</span>{" "}
                <span className="font-bold">$00</span>
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
      ) : (
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-red-500">
          No items in your cart
        </h1>
      )}
    </div>
  );
};

export default Cart;
