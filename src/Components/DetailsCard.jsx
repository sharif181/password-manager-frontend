import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import passwordServices from "../services/password-services";

const DetailsCard = () => {
  let { passwordId } = useParams();
  const [password, setPassword] = useState({});

  useEffect(() => {
    const fetechPassword = async () => {
      let password = await passwordServices.getPassword(passwordId);
      setPassword(password);
    };

    fetechPassword();
  }, [passwordId]);

  if (!password || password === null) return;

  return (
    <div className="flex justify-center">
      <div className="w-[700px] h-[150px] bg-gray-300 rounded-md shadow-xl mb-4">
        <div className="p-4">
          <div className="text-start">
            <p>Website title: {password.website_name}</p>
            <p>Password: {password.password}</p>
            <p>Website link: {password.website_link}</p>
            <p>Description: {password.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
