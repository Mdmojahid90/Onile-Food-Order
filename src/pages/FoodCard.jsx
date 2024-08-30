import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import toast from "react-hot-toast";

function FoodCard({ id, img, name, desc, price, rating }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="shadow-xl bg-white flex flex-col justify-center w-[350px] h-[350px] mb-3  ">
        <img src={img} alt="" className=" mx-auto w-[130px] h-[130px] " />
        <div className="flex justify-between m-3 px-[1.8rem]  ">
          <h3 className="font-bold  ">{name}</h3>
          <span className="text-green-400  font-bold ">₹{price}</span>
        </div>
        <p className=" p-3 ">{desc.slice(0, 70)}...</p>
        <div className="flex justify-between px-[1.8rem]">
          <p className=" font-bold flex items-center ">
            <FaStar className=" text-yellow-400 mr-1 " />
            {rating}
          </p>
          <button
            className=" bg-green-400 text-white  p-[0.5rem_1rem] rounded "
            onClick={() => {
              dispatch(addToCart({ id, img, name, rating, price, qty: 1 }));
              toast.success(`Added ${name}`);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

export default FoodCard;
