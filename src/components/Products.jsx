/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import bravo from "../assets/Bravo-Sunglasses-product.png";
import vincent from "../assets/Vincent-Chase-product.png";
import john from "../assets/John-Jacobs-product.png";
import tommy from "../assets/Tommy-Hilfiger-product.png";
import ray from "../assets/Ray-Ban-product.png";
import occhiali from "../assets/Occhiali-product.png";
import ProductCard from "./ProductCard";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("Special");
  const [showingProducts, setShowingProducts] = useState([]);
  const productCategories = ["Latest", "Special", "Best sell"];
  const products = [
    {
      id: 1,
      title: "Bravo Sunglasses",
      previousPrice: 150,
      currentPrice: 100,
      discount: 10,
      img: bravo,
    },
    {
      id: 2,
      title: "Vincent Chase",
      previousPrice: 150,
      currentPrice: 120,
      discount: 10,
      img: vincent,
    },
    {
      id: 3,
      title: "John Jacobs",
      currentPrice: 100,
      img: john,
    },
    {
      id: 4,
      title: "Tommy Hilfiger",
      previousPrice: 150,
      currentPrice: 130,
      discount: 10,
      img: tommy,
    },
    {
      id: 5,
      title: "Ray Ban",
      currentPrice: 100,
      img: ray,
    },
    {
      id: 6,
      title: "Occhiali",
      previousPrice: 150,
      currentPrice: 110,
      discount: 10,
      img: occhiali,
    },
  ];

  // handling Latest Special Best sell product category rendering
  useEffect(() => {
    if (selectedCategory === "Latest") {
      console.log("first");
      setShowingProducts(products.reverse());
    } else if (selectedCategory === "Best sell") {
      setShowingProducts(
        products.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        })
      );
    } else {
      setShowingProducts(products);
    }
  }, [selectedCategory]);

  return (
    <div className="max-w-[1321px] mx-auto py-[150px] font-josefin px-4">
      <h1 className="text-4xl font-bold mb-5">Our Products</h1>

      <div className="md:flex justify-between items-center mb-20">
        <p className="lg:w-[445px] text-xl text-gray-600">
          Experience crystal clear vision and elevated style with our premium
          collection of eyeglasses.
        </p>
        <div className="flex items-center mt-8 md:mt-0 justify-center">
          {productCategories.map((cat) => (
            <button
              onClick={() => setSelectedCategory(cat)}
              className={`rounded border px-5 py-1 duration 200 whitespace-nowrap md:text-xl lg:text-base ${
                selectedCategory === cat ? "border-black" : "border-transparent"
              }`}
              key={cat}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[35px]">
        {showingProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
