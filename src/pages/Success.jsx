import { FaCircleCheck } from "react-icons/fa6";
function Success() {
  return (
    <>
      <div className=" h-[100vh] border-2 flex flex-col items-center justify-center">
        <h2 className="font-bold text-[4rem] mb-4">
          <FaCircleCheck className="inline-block p-1 mx-2 text-green-500 " />
          Order Successfull!
        </h2>
        <p className="text-[1.8rem]">
          Your order has been successfully placed.
        </p>
      </div>
    </>
  );
}

export default Success;
