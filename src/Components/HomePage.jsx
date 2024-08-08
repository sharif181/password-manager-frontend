import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPassword } from "../features/password/passwordSlice";
import Card from "./Card";
import passwordServices from "../services/password-services";

const HomePage = () => {
  const { isLoading, isError, error, passwords } = useSelector(
    (state) => state.passwords
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPassword());
  }, [dispatch]);

  const handleDelete = async (id) => {
    await passwordServices.deletePassword(id);
    dispatch(fetchPassword());
  };

  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <div className="flex justify-start">
      <div className="w-1/3">sidebar</div>
      <div className="mt-2">
        {passwords.map((password) => (
          <Card
            key={password.id}
            password={password}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
