import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";

const Navbar = () => {
  const navigationLinksName = [
    "Home",
    "About Us",
    "Products",
    "Features",
    "Reviews",
    "Contact Us",
  ];
  return (
    <nav className="container mx-auto flex items-center justify-between py-[30px]">
      <div>
        <img src={logo} alt=" Eye Glass logo" />
      </div>
      <ul className="flex gap-[30px]">
        {navigationLinksName.map((navLink) => (
          <li key={navLink}>
            <NavLink to={`/${navLink.replace(" ", "").toLowerCase()}`}>
              {navLink}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="flex gap-[20px]">
        <NavLink to={"/cart"}>
          <FaCartShopping />
        </NavLink>
        <NavLink to={"/login"}>
          <FaUser />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
