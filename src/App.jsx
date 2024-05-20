import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

const App = () => {
  const [isScrolledDown, setIsScrollDown] = useState(false);

  // detecting the scroll event
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setIsScrollDown(true);
      } else {
        setIsScrollDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <div
        className={`${
          isScrolledDown ? "fixed top-0 w-full z-50 bg-white" : "static"
        }`}
      >
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </main>
  );
};

export default App;
