import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const PrivateRoutes = ({ children }) => {
  const { isLoggin } = useSelector((state) => state.auth);
  const navigator = useNavigate();
  useEffect(() => {
    if (!isLoggin) {
      navigator("/login");
    }
  }, [isLoggin]);
  return children;
};

export default PrivateRoutes;
