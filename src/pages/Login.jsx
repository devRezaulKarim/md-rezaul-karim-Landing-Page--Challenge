import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-xl">Login: Coming soon...</h1>
      <Link
        to={"/"}
        className="bg-dark-gray px-5 py-2 rounded-lg text-white mt-4 inline-block"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default Login;
