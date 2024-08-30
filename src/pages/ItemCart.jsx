import { MdDelete } from "react-icons/md";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { deleteToCart, increment, decrement } from "../store/slices/cartSlice";
import toast from "react-hot-toast";

function ItemCart({ id, img, name, price, qty }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="shadow-2xl m-3 flex p-1">
        <img src={img} alt="" className=" w-[50px] " />

        <div className="flex flex-col w-[100%] ">
          <div className="flex justify-between items-center   ">
            <h3 className="pl-1 text-black font-bold text-sm ">{name}</h3>
            <MdDelete
              className=" cursor-pointer text-[1rem] md:text-[1.5rem] text-red-600"
              onClick={() => {
                dispatch(deleteToCart({ id }));
                toast.error(`${name} Removed!`);
              }}
            />
          </div>

          <div className="flex justify-between">
            <h3 className="pl-1 text-green-400 font-bold ">₹{price}</h3>
            <p className="flex items-center">
              <span>
                <FiPlus
                  className=" border-2 border-gray-800 rounded hover:bg-green-400 hover:text-white cursor-pointer "
                  onClick={() =>
                    qty >= 1 ? dispatch(increment({ id })) : (qty = 1)
                  }
                />
              </span>
              <span className="px-2 text-green-400 ">{qty}</span>
              <span>
                <FiMinus
                  className=" border-2 border-gray-800 rounded hover:bg-green-400 hover:text-white cursor-pointer "
                  onClick={() =>
                    qty > 1 ? dispatch(decrement({ id })) : (qty = 0)
                  }
                />
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCart;
