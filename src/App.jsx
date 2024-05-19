import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </main>
  );
};

export default App;
