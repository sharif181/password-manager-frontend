import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div class="relative flex flex-col justify-center h-screen overflow-hidden">
      <div class="w-full m-auto bg-white rounded-md shadow-md lg:max-w-lg">
        <h1 class="text-3xl font-semibold text-center text-purple-700">
          Login
        </h1>
        <form class="space-y-4">
          <div>
            <label class="label">
              <span class="text-base label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Email Address"
              class="w-full input input-bordered input-primary"
            />
          </div>
          <div>
            <label class="label">
              <span class="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              class="w-full input input-bordered input-primary"
            />
          </div>
          <Link
            to="/"
            class="text-xs text-gray-600 hover:underline hover:text-blue-600"
          >
            Forget Password?
          </Link>
          <div className="flex justify-center pb-2">
            <button class="btn btn-primary text-bold">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
