import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-base-100 container mx-auto max-w-7xl">
      <div class="navbar  flex justify-between">
        <div class="">
          <label
            for="my-drawer-2"
            class="btn btn-ghost drawer-button mx-2 lg:hidden"
          >
            <FontAwesomeIcon
              className="text-[16px] mr-2"
              icon={faBars}
            ></FontAwesomeIcon>
          </label>
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

      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to={"/today"}>Today</Link>
            </li>
            <li>
              <Link to={"/archive"}>Archive</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
