import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPassword } from "../features/password/passwordSlice";
import Card from "./Card";
import InputForm from "./InputForm";
import passwordServices from "../services/password-services";

const HomePage = () => {
  const { isLoading, isError, error, passwords } = useSelector(
    (state) => state.passwords
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPassword());
  }, [dispatch]);

  const handleDelete = async (id) => {
    await passwordServices.deletePassword(id);
    dispatch(fetchPassword());
  };

  const detailsHandler = (id) => {
    navigate(`/details/${id}`);
  };

  const handleSubmit = (data) => {
    console.log(data);
  };

  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <div className="flex justify-start">
      <div className="w-1/3">sidebar</div>
      <div className="mt-2">
        <InputForm handleSubmitForm={handleSubmit} />
        {passwords.map((password) => (
          <Card
            key={password.id}
            password={password}
            handleDelete={handleDelete}
            detailsHandler={detailsHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
