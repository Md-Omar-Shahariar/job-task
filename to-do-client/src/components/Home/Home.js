import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faBox,
  faTable,
  faBars,
  faPlus,
  faHomeUser,
  faBriefcase,
  faPerson,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { async } from "@firebase/util";

const Home = () => {
  const [a, setA] = useState(1);

  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const logOut = async () => {
    await signOut(auth);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    // console.log(e.target.task.value);
    // console.log(e.target.date.value);
    let type;
    if (a === 1) {
      type = "Personal";
    } else if (a === 2) {
      type = "Home";
    } else {
      type = "Office";
    }

    const task = {
      name: user.displayName,
      task: e.target.task.value,
      date: e.target.date.value,
      type: type,
    };
    console.log(task);
  };

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
          {/* <button className="btn btn-primary hidden mr-5 md:flex items-center ">
            <FontAwesomeIcon
              className="text-[16px] mr-2"
              icon={faPlus}
            ></FontAwesomeIcon>
            New Task
          </button> */}
          {/* <!-- The button to open modal --> */}
          <label
            for="my-modal"
            class="btn btn-primary hidden mr-5 md:flex items-center"
          >
            <FontAwesomeIcon
              className="text-[16px] mr-2"
              icon={faPlus}
            ></FontAwesomeIcon>
            New Task
          </label>

          {/* <!-- Put this part before </body> tag --> */}
          {!user && (
            <>
              <input type="checkbox" id="my-modal" class="modal-toggle" />
              <div class="modal">
                <div class="modal-box">
                  <h3 class="font-bold text-lg">User Please Log-In</h3>

                  <div class="modal-action">
                    <button className="" onClick={() => navigate("/login")}>
                      <label for="my-modal" class="btn">
                        Login
                      </label>
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
          {user && (
            <>
              <input type="checkbox" id="my-modal" class="modal-toggle" />
              <div class="modal text-left font-medium">
                <div class="modal-box ">
                  <div class="modal-action flex flex-col items-start ">
                    <form action="" onSubmit={handleSubmit} className="w-full">
                      <h2 className="text-2xl pb-3">Add Task</h2>
                      <label for="task" className="text-start">
                        What are you upto?
                      </label>
                      <br />
                      <input
                        id="task"
                        name="task"
                        className="w-full border border-primary h-8 px-4 rounded-lg my-3"
                        type="text"
                        required
                      />
                      <br />
                      <label for="date">When do you want to complete?</label>
                      <br />
                      <input
                        className="w-full border border-primary h-8 px-4 rounded-lg my-3"
                        name="date"
                        id="date"
                        type="date"
                        required
                      />
                      <label for="btn" className="">
                        Tags
                      </label>
                      <div class="btn-group my-4 " id="btn">
                        <input
                          onClick={() => setA(1)}
                          type="button"
                          value="Personal"
                          name="btn1"
                          className={
                            a === 1
                              ? `btn btn-outline btn-active`
                              : `btn btn-outline `
                          }
                        />
                        <input
                          onClick={() => setA(2)}
                          type="button"
                          value="Home"
                          name="btn1"
                          className={
                            a === 2
                              ? `btn btn-outline btn-active`
                              : `btn btn-outline `
                          }
                        />
                        <input
                          onClick={() => setA(3)}
                          type="button"
                          value="Office"
                          name="btn1"
                          className={
                            a === 3
                              ? `btn btn-outline btn-active`
                              : `btn btn-outline `
                          }
                        />
                      </div>
                      <div className="flex">
                        <input
                          type="submit"
                          value="Add"
                          className="btn flex-1"
                        />
                        <label className="" for="my-modal" class="btn flex-1 ">
                          Cancel
                        </label>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div class="flex-none gap-2">
          <div class="dropdown dropdown-end">
            {user && (
              <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                  <img src="https://api.lorem.space/image/face?hash=33791" />
                </div>
              </label>
            )}
            <ul
              tabindex="0"
              class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <button>
                  <label
                    for="my-modal"
                    class="btn btn-primary w-full md:hidden"
                  >
                    <FontAwesomeIcon
                      className="text-[16px] mr-2"
                      icon={faPlus}
                    ></FontAwesomeIcon>
                    New Task
                  </label>
                </button>
              </li>

              {user && (
                <li>
                  <button onClick={logOut} className="">
                    <label for="my-modal" class="btn btn-error w-full  ">
                      Log-Out
                    </label>
                  </button>
                </li>
              )}
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
              <Link to={"/all"}>
                <FontAwesomeIcon
                  className="text-[16px] mr-2"
                  icon={faCalendarCheck}
                ></FontAwesomeIcon>
                All
              </Link>
            </li>
            <li>
              <Link to={"/today"}>
                <FontAwesomeIcon
                  className="text-[16px] mr-2"
                  icon={faTable}
                ></FontAwesomeIcon>
                Today
              </Link>
            </li>
            <li>
              <Link to={"/archive"}>
                <FontAwesomeIcon
                  className="text-[16px] mr-2"
                  icon={faBox}
                ></FontAwesomeIcon>
                Archive
              </Link>
            </li>
            <div className="divider"></div>
            <li>
              <Link to={"/home"}>
                <FontAwesomeIcon
                  className="text-[16px] mr-2"
                  icon={faHomeUser}
                ></FontAwesomeIcon>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/office"}>
                <FontAwesomeIcon
                  className="text-[16px] mr-2"
                  icon={faBriefcase}
                ></FontAwesomeIcon>
                Office
              </Link>
            </li>
            <li>
              <Link to={"/personal"}>
                <FontAwesomeIcon
                  className="text-[16px] mr-2"
                  icon={faPerson}
                ></FontAwesomeIcon>
                Personal
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
