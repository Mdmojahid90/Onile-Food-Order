import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import ItemCart from "./ItemCart";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Cart() {
  const [close, setClose] = useState(false);
  const { cartsData } = useSelector((store) => store.cart);
  const totalQty = cartsData.reduce((initial, item) => initial + item.qty, 0);
  const totalAmount = cartsData.reduce(
    (initial, item) => initial + item.qty * item.price,
    0
  );

  const navigate = useNavigate();
  return (
    <div className="">
      <div
        className={`bg-white  w-[100vw] sm:w-[50vw] md:w-[30vw] h-[100vh] lg:w-[25vw] transition-all duration-500 fixed top-0 right-0 ${
          close ? "translate-x-0" : "translate-x-full "
        } z-50`}
      >
        <div className=" px-[1.2rem] my-3 flex items-center justify-between">
          <h2 className=" text-[1.5rem] font-bold">My Order</h2>
          <IoMdClose
            className={` hover:bg-red-500 hover:text-white cursor-pointer rounded text-[1.5rem] border-2 border-gray-800
             `}
            onClick={() => setClose(!close)}
          />
        </div>

        <h2 className="text-center font-bold text-3xl py-4 ">
          {cartsData.length === 0 && "Cart is empty"}
        </h2>

        <div>
          {cartsData.map((item) => {
            return (
              <ItemCart
                key={item.id}
                id={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
                qty={item.qty}
              />
            );
          })}
        </div>

        <div className=" bg-white px-[1rem] my-1 absolute bottom-3 w-full ">
          <p className="mb-2">Items:{totalQty}</p>
          <h3 className="mb-5">Total Amount:{totalAmount}</h3>
          <button
            className={` cursor-pointer py-2 rounded w-full text-center bg-green-400 text-white`}
            onClick={() => navigate("/success")}
          >
            Checkout
          </button>
        </div>
      </div>

      <div>
        <FaShoppingCart
          className="text-[3.2rem] p-3 rounded-full bg-gray-200 fixed bottom-6 right-3 cursor-pointer "
          onClick={() => setClose(!close)}
        />
      </div>
    </div>
  );
}

export default Cart;
