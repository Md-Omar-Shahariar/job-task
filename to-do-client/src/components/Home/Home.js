import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Home = () => {
  return (
    <div class="navbar bg-base-100 container mx-auto max-w-7xl flex justify-between">
      <div class="">
        <a class="font-serif normal-case text-[16px] font-[900]">TASKS</a>
      </div>
      <div class="form-control flex-1 mx-5">
        <input
          type="text"
          placeholder="Search"
          className=""
          class="input input-bordered  w-full"
        />
      </div>
      <div>
        <button className="btn btn-primary hidden mr-5 md:flex items-center ">
          <FontAwesomeIcon
            className="text-[16px] mr-2"
            icon={faPlus}
          ></FontAwesomeIcon>
          New Task
        </button>
      </div>
      <div class="flex-none gap-2">
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" />
            </div>
          </label>
          <ul
            tabindex="0"
            class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <button className="btn btn-primary flex font-extrabold md:hidden items-center ">
                <FontAwesomeIcon
                  className="text-[16px] mr-2"
                  icon={faPlus}
                ></FontAwesomeIcon>
                New Task
              </button>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
