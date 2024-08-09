import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  website_name: z
    .string()
    .min(3, { message: "Website name should be a valid string" }),
  password: z
    .string()
    .min(4, { message: "password should be minium 4 char(s" }),
  website_link: z.union([
    z.literal(""),
    z.string().trim().url({ message: "Invalid url" }),
  ]),
  description: z.string(),
});

const InputForm = ({ handleSubmitForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <form
      className="flex flex-col items-center shadow-lg bg-slate-50 rounded-md m-2"
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <div className="m-2 w-full max-w-xs">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Website Name</span>
          </div>
          <input
            {...register("website_name")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.website_name && (
            <p className="text-red-600">{errors.website_name.message}</p>
          )}
        </label>
      </div>

      <div className="m-2 w-full max-w-xs">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input
            {...register("password")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.password && (
            <p className="text-red-600">{errors.password.message}</p>
          )}
        </label>
      </div>

      <div className="m-2 w-full max-w-xs">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Website Link</span>
          </div>
          <input
            {...register("website_link")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.website_link && (
            <p className="text-red-600">{errors.website_link.message}</p>
          )}
        </label>
      </div>

      <div className="m-2 w-full max-w-xs">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <textarea
            {...register("description")}
            className="textarea textarea-bordered textarea-lg w-full max-w-xs"
            placeholder="Description"
          ></textarea>
          {errors.description && (
            <p className="text-red-600">{errors.description.message}</p>
          )}
        </label>
      </div>
      <button className="btn btn-primary m-2">Save</button>
    </form>
  );
};

export default InputForm;
