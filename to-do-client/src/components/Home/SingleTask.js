import React from "react";

const SingleTask = ({ task }) => {
  return (
    <div className="flex items-center  w-full border rounded-md px-10 mb-4">
      <div className="mr-10">
        <input type="checkbox" className="" name="" id="" />
      </div>
      <div className="">
        <h1 className="text-xl font-medium">{task.task}</h1>
        <p className="text-xs">{task.date}</p>
      </div>
    </div>
  );
};

export default SingleTask;
