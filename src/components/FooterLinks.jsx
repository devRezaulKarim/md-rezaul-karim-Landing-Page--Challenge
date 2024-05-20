/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const FooterLinks = ({ links }) => {
  const { title, footerLinks } = links;
  return (
    <div className="pt-2 mt-8 lg:mt-0">
      <h3 className="text-base lg:text-xl font-bold">{title}</h3>
      <ul className="mt-4 space-y-4">
        {footerLinks.map((link) => (
          <li key={link.name}>
            <Link className="text-sm lg:text-base" href={link.url}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
