/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const MobileMenu = ({ setIsMobileMenuOpen }) => {
  const navigationLinksName = [
    "Home",
    "About Us",
    "Products",
    "Features",
    "Reviews",
    "Contact Us",
  ];
  return (
    <ul className="text-center font-josefin pb-4 divide-y">
      {navigationLinksName.map((navLink) => (
        <li className="md:text-2xl " key={navLink}>
          <NavLink
            onClick={() => setIsMobileMenuOpen(false)}
            className={" block py-[10px]"}
            to={`/${navLink.replace(" ", "").toLowerCase()}`}
          >
            {navLink}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MobileMenu;
