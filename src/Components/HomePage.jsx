import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPassword } from "../features/password/passwordSlice";

const HomePage = () => {
  const { isLoading, isError, error, passwords } = useSelector(
    (state) => state.passwords
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPassword());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <ul>
        {passwords.map((password) => (
          <li key={password.id}>{password.website_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
