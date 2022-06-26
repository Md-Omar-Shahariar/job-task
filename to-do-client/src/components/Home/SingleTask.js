import React from "react";

const SingleTask = ({ task }) => {
  const date = task.date.split("-");
  //   console.log(date);

  const date1 = new Date(date);
  const date2 = new Date();
  //   console.log(`${date2}`);
  const diffTime = Math.abs(date1 - date2);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  //   console.log(diffDays);
  const hours = Math.round(diffTime / (1000 * 60 * 60)) - diffDays * 24;

  let message;

  //   console.log(date1, date2);
  if (date1 > date2) {
    if (diffDays < 1) {
      message = `Tomorrow`;
    } else {
      message = `${diffDays} Days  ${hours} Hours left`;
    }
  } else if (diffDays === 0) {
    message = "Today";
  } else {
    message = `${diffDays} Days  ${hours} Hours Over due`;
  }

  return (
    <div className="block sm:flex sm:justify-between justify-center items-center py-1  w-full border rounded-md px-10 mb-4">
      <div className="flex items-center md:justify-between justify-center py-4 sm:py-0">
        <div className="mr-10">
          <input type="checkbox" className="" name="" id="" />
        </div>
        <div className="">
          <h1 className="text-xl font-medium">{task.task}</h1>
          {/* <p className="text-xs">{task.date}</p> */}
          <p className="text-error">{message}</p>
        </div>
      </div>
      <button className="btn btn-sm btn-error">Delete</button>
    </div>
  );
};

export default SingleTask;
