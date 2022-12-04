import React from "react";
import Navbar from "./Navbar";
import { BsHouseDoor } from "react-icons/bs";
import { TbArrowsSort } from "react-icons/tb";
import AddTask_list from "./AddTask_list";
import Completed_task from "./Completed_task";

export const TodoList = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="mb-5 mt-10 mx-2 flex justify-between">
          <div className="flex items-center text-blue-600">
            <BsHouseDoor className="text-2xl" />
            <h3 className="text-2xl font-semibold ml-2">Tasks</h3>
          </div>
          <div className="flex items-center text-blue-600">
            <TbArrowsSort className="text-xl" />
            <h3 className="ml-2">Sort</h3>
          </div>
        </div>
      </div>
      <AddTask_list />
      <Completed_task />
    </>
  );
};
