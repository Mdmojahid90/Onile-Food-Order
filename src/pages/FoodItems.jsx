import { useSelector } from "react-redux";
import FoodData from "../data/FoodData";
import FoodCard from "./FoodCard";

function FoodItems() {
  const { category } = useSelector((store) => store.category);
  const { search } = useSelector((store) => store.search);
  return (
    <>
      <div className="flex gap-6 flex-wrap px-[2.4rem] justify-center items-center ">
        {FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return (
              category === food.category &&
              food.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((item) => {
          return (
            <FoodCard
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              rating={item.rating}
              desc={item.desc}
            />
          );
        })}
      </div>
    </>
  );
}

export default FoodItems;
