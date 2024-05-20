import Experience from "../components/Experience";
import Banner from "../components/Banner";
import BuyEasyStep from "../components/BuyEasyStep";
import Types from "../components/Types";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <BuyEasyStep />
      <Types />
      <Experience />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
