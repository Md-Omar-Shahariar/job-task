import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import SingleTask from "./SingleTask";

const All = () => {
  const [tasks, setTasks] = useState([]);
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/users?email=${user?.email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [loading]);
  console.log(tasks);

  return (
    <div className="">
      {tasks.map((task) => (
        <SingleTask task={task} key={task._id}></SingleTask>
      ))}
    </div>
  );
};

export default All;
