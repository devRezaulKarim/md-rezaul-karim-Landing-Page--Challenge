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
    <footer>
      <div className="max-w-[1321px] mx-auto font-josefin">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 py-10 px-4 lg:px-0">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-10 md:flex lg:block items-center justify-between">
            <div>
              <Link
                href={"/"}
                className="cursor-pointer text-3xl lg:text-4xl font-black"
              >
                <img src={logo} alt="Eye glass logo" />
              </Link>
              <p className="my-7 leading-7 md:max-w-[500px] lg:max-w-[400px] text-lg md:text-2xl lg:text-lg">
                Latin literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampde
              </p>
            </div>
            <ul className="flex md:flex-col lg:flex-row gap-4">
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
      </div>
      <div className="border-t border-[#fed29c] py-[30px] text-gray-500">
        <div className="max-w-[1321px] mx-auto font-josefin md:flex justify-between px-4 lg:px-0">
          <p className="md:text-lg">
            Copyright © 2023 All rights reserved by Eyeglass
          </p>
          <p className="flex gap-[30px] mt-4 md:mt-0 md:text-lg">
            <Link to={"#"}>Privacy Policy</Link>
            <Link to={"#"}>Terms of service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
