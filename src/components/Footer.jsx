import logo from "../assets/Logo.png";

import { FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import FooterLinks from "./FooterLinks";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      url: "#",
    },
    {
      icon: <FaInstagramSquare />,
      url: "#",
    },
    {
      icon: <FaTwitter />,
      url: "#",
    },
  ];
  const supportLinks = {
    title: "Support",
    footerLinks: [
      { url: "#", name: "Privacy Policy" },
      { url: "#", name: "Terms & Conditions" },
      { url: "#", name: "Product FAQs" },
      { url: "#", name: "Company Support" },
      { url: "#", name: "Manage Account" },
    ],
  };
  const quickLinks = {
    title: "Quick Links",
    footerLinks: [
      { url: "#", name: "About Us" },
      { url: "#", name: "Blog Post" },
      { url: "#", name: "Product Features" },
      { url: "#", name: "Company Info" },
      { url: "#", name: "Company Info" },
    ],
  };
  const communityLinks = {
    title: "Community",
    footerLinks: [
      { url: "#", name: "Become an affiliate" },
      { url: "#", name: "Help Center" },
      { url: "#", name: "Product FAQs" },
      { url: "#", name: "Our Forums" },
      { url: "#", name: "Product API" },
    ],
  };

  return (
    <footer className="max-w-[1321px] mx-auto font-josefin">
      <div className="grid grid-cols-1 lg:grid-cols-5 py-10 px-4 lg:px-0">
        <div className="col-span-2 lg:pr-10 ">
          <Link
            href={"/"}
            className="cursor-pointer text-3xl lg:text-4xl font-black"
          >
            <img src={logo} alt="Eye glass logo" />
          </Link>
          <p className="my-7 leading-7">
            Latin literature from 45 BC, making it over 2000 <br /> years old.
            Richard McClintock, a Latin professor at <br /> Hampde
          </p>
          <ul className="flex gap-4">
            {socialLinks.map((link, i) => (
              <li key={i}>
                <Link
                  href={"#"}
                  className="text-xl border border-[#fed29c] block p-2 rounded-full  hover:bg-[#fed29c] duration-200"
                >
                  {link.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <FooterLinks links={supportLinks} />

        <FooterLinks links={quickLinks} />

        <FooterLinks links={communityLinks} />
      </div>
      <div className="border-t py-5 text-gray-500">
        <p>eShop © 2024 all rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
