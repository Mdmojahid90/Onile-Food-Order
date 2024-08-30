import { useDispatch } from "react-redux";
import { setSearch } from "../store/slices/searchSlice";
function Navbar() {
  const dispatch = useDispatch();
  return (
    <>
      <header className=" fixed top-0 w-full z-20 flex justify-between p-[1rem_2.4rem] bg-white  flex-col sm:flex-row ">
        <div className="mb-[1rem] sm:p-0">
          <p className=" mb-3 sm:p-0">
            {new Date().toUTCString().slice(0, 16)}
          </p>
          <h1 className="font-bold ">Mojahid Foods Shop</h1>
        </div>
        <div>
          <input
            type="search"
            name="search"
            placeholder="Search your food here"
            className="border-2  p-[0.5rem] rounded"
            onChange={(e) => dispatch(setSearch(e.target.value))}
          />
        </div>
      </header>
    </>
  );
}

export default Navbar;
