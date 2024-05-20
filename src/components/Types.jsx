import bravoSunglasses from "../assets/Bravo-Sunglasses.png";
import johnJacobs from "../assets/John-Jacobs.png";
import tommyHilfiger from "../assets/Tommy-Hilfiger.png";
import vincentChase from "../assets/Vincent-Chase.png";
import TypeCard from "./TypeCard";

const Types = () => {
  const glassTypesForLeft = [
    {
      image: bravoSunglasses,
      title: "Bravo Sunglasses",
      text: "Up to 80% off on selected item",
    },
    {
      image: johnJacobs,
      title: "John Jacobs",
      text: "Up to 40% off on selected item",
    },
  ];
  const glassTypesForRight = [
    {
      image: tommyHilfiger,
      title: "Tommy Hilfiger",
      text: "Up to 30% off on selected item",
    },
    {
      image: vincentChase,
      title: "Vincent Chase",
      text: "Up to 10% off on selected item",
    },
  ];
  return (
    <div className="max-w-[1321px] mx-auto pb-20 md:pb-[150px] lg:flex gap-[35px] px-4 lg:px-0">
      <div className="flex flex-col gap-[35px]">
        {glassTypesForLeft.map((type) => (
          <TypeCard key={type.title} type={type} />
        ))}
      </div>
      <div className="flex flex-col gap-[35px]">
        {glassTypesForRight.map((type) => (
          <TypeCard key={type.title} type={type} />
        ))}
      </div>
    </div>
  );
};

export default Types;
