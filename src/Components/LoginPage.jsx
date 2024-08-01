import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import userService from "../services/auth-service";

const schema = z.object({
  email: z
    .string()
    .min(1, { message: "Email field is required" })
    .email("This is not a valid email."),
  password: z
    .string()
    .min(4, { message: "password should be minimum 4 char(s)" }),
});

const LoginPage = () => {
  const navigator = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const onSubmit = (data) => {
    userService
      .getToken(data)
      .then((res) => {
        localStorage.setItem("accessToken", res.data.access);
        // also need to store in store if needed
        navigator("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="relative flex flex-col justify-center h-screen overflow-hidden">
      <div className="w-full m-auto bg-white rounded-md shadow-md lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-purple-700">
          Login
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="label">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              {...register("email")}
              type="text"
              placeholder="Email Address"
              className="w-full input input-bordered input-primary"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              {...register("password")}
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered input-primary"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>
          <Link
            to="/"
            className="text-xs text-gray-600 hover:underline hover:text-blue-600"
          >
            Forget Password?
          </Link>
          <div className="flex justify-center pb-2">
            <button type="submit" className="btn btn-primary text-bold">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
