import { useCart } from "../context/GlobalState";
import CartCard from "./CartCard";

const Cart = () => {
  const { cartItems } = useCart();
  return (
    <div className="max-w-[1321px] mx-auto">
      <h1 className="lg:text-4xl font-bold font-josefin">Your Cart</h1>
      <div className="border rounded-lg px-4 divide-y-2">
        {cartItems.map((item) => (
          <CartCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
