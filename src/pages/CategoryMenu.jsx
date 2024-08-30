import { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryData } from "../store/slices/categorySlice";

function CategoryMenu() {
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch();
  const clickedCategory = useSelector((store) => store.category.category);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((item) => item.category)),
    ];
    setCategory(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  return (
    <section className="p-[1rem_2.4rem]">
      <h2 className="m-[2rem_0_3rem_0] font-bold text-[2rem] ">
        Find the best food
      </h2>
      <div className=" flex gap-6 overflow-x-scroll   scroll-smooth mb-3 md:overflow-x-hidden ">
        <button
          className={`p-[0.5rem_0.8rem] bg-gray-200 rounded ${
            clickedCategory == "All" && "bg-green-400 text-white"
          } `}
          onClick={() => {
            dispatch(setCategoryData("All"));
          }}
        >
          All
        </button>

        {category.map((categoryitem) => (
          <button
            key={categoryitem}
            className={`p-[0.5rem_0.8rem] bg-gray-200 rounded ${
              clickedCategory == categoryitem && "bg-green-400 text-white"
            } `}
            onClick={() => {
              dispatch(setCategoryData(categoryitem));
            }}
          >
            {categoryitem}
          </button>
        ))}
      </div>
    </section>
  );
}

export default CategoryMenu;
