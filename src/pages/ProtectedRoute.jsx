import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ element }) {
  const { cartsData } = useSelector((store) => store.cart);
  return cartsData.length > 0 ? element : <Navigate to="/" />;
}

export default ProtectedRoute;
