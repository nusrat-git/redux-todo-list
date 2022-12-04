import React from "react";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="bg-blue-500">
      <div className="container mx-auto py-2 flex justify-between">
        <div className="">
          <a href="/" className="btn btn-ghost text-white normal-case text-xl">
            To Do
          </a>
        </div>
        <div className="bg-base-100 flex items-center rounded">
          <input className=" rounded w-[300px] border-none outline-none px-2" type="text" />
          <button className="mr-1 px-2">
            <BsSearch />
          </button>
        </div>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" alt="" />
          </div>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
