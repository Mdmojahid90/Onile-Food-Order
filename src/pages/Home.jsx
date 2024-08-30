import CategoryMenu from "./CategoryMenu";
import FoodItems from "./FoodItems";
import Cart from "./Cart";
function Home() {
  return (
    <div className="mt-[10rem] md:mt-[5rem] ">
      <CategoryMenu />
      <FoodItems />
      <Cart />
    </div>
  );
}

export default Home;
