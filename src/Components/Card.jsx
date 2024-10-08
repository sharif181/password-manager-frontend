import React from "react";

const Card = ({ password, handleDelete, detailsHandler }) => {
  return (
    <div className="w-[700px] h-[150px] bg-gray-300 rounded-md shadow-xl mb-4">
      <div className="p-4">
        <div className="text-start">
          <p>Website title: {password.website_name}</p>
          <p>Password: {password.password}</p>
        </div>
        <div className="text-center">
          <button
            onClick={() => detailsHandler(password.id)}
            className="btn btn-primary mt-3"
          >
            Details
          </button>
          <button className="btn btn-secondary mt-3 ml-3">Update</button>
          <button
            onClick={() => handleDelete(password.id)}
            className="btn btn-error mt-3 ml-3"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
