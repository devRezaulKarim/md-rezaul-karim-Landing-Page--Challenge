import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
import { FaCartShopping, FaUser, FaXmark, FaBars } from "react-icons/fa6";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { useCart } from "../context/GlobalState";

const Navbar = () => {
  const { cartItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationLinksName = [
    "Home",
    "About Us",
    "Products",
    "Features",
    "Reviews",
    "Contact Us",
  ];
  return (
    <nav className="container mx-auto ">
      <div className="flex items-center justify-between py-[30px] px-4 lg:px-0">
        <div>
          <img width={150} src={logo} alt=" Eye Glass logo" />
        </div>
        <ul className="hidden lg:flex gap-[30px] font-josefin  ">
          {navigationLinksName.map((navLink) => (
            <li key={navLink}>
              <NavLink
                className={"text-lg"}
                to={`/${navLink.replace(" ", "").toLowerCase()}`}
              >
                {navLink}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex gap-[20px] text-2xl">
          <NavLink className={"relative"} to={"/cart"}>
            <FaCartShopping />
            {cartItems.length > 0 && (
              <span className="absolute top-0 -translate-y-1/2 right-0 translate-x-1/2 text-base bg-red-500 px-1 rounded-full font-bold text-white">
                {cartItems.length}
              </span>
            )}
          </NavLink>
          <NavLink to={"/login"}>
            <FaUser />
          </NavLink>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden"
          >
            {isMobileMenuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>
      <div
        className={`${
          isMobileMenuOpen ? "h-[265px]" : "h-0"
        } duration-200 lg:hidden overflow-hidden`}
      >
        <MobileMenu setIsMobileMenuOpen={setIsMobileMenuOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
