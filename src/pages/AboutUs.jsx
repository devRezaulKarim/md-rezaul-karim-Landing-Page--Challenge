import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-xl">About us: Coming soon...</h1>
      <Link
        to={"/"}
        className="bg-dark-gray px-5 py-2 rounded-lg text-white mt-4 inline-block"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default AboutUs;
