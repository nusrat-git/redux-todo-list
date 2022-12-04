import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";

const Completed_task = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container mx-auto my-10">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center cursor-pointer"
      >
        {open ? <IoIosArrowForward /> : <IoIosArrowDown />}
        <h3 className="mx-3">Completed</h3>
        <span className="">12</span>
      </div>
      {/* completed task */}

      <div className={`mt-2 ${!open && "hidden"}`}>
        <div className="hover:bg-gray-100 flex justify-between py-3 px-5 mt-3 shadow  rounded-md">
          <div className="flex items-center line-through">
            <input
              type="checkbox"
              checked
              className="checkbox checkbox-info checkbox-sm"
            />

            <h3 className="ml-5">Group Todo List</h3>
          </div>
          <AiOutlineStar className="text-2xl text-blue-500" />
          {/* <AiFillStar  className="text-2xl text-blue-500"/> */}
        </div>
        <div className="hover:bg-gray-100 flex justify-between py-3 px-5 mt-3 shadow  rounded-md">
          <div className="flex items-center line-through">
            <input
              type="checkbox"
              checked
              className="checkbox checkbox-info checkbox-sm"
            />
            <h3 className="ml-5">Group Todo List</h3>
          </div>
          <AiOutlineStar className="text-2xl text-blue-500" />
          {/* <AiFillStar  className="text-2xl text-blue-500"/> */}
        </div>
        <div className="hover:bg-gray-100 flex justify-between py-3 px-5 mt-3 shadow  rounded-md">
          <div className="flex items-center line-through">
            <input
              type="checkbox"
              checked
              className="checkbox checkbox-info checkbox-sm"
            />
            <h3 className="ml-5">Group Todo List</h3>
          </div>
          <AiOutlineStar className="text-2xl text-blue-500" />
          {/* <AiFillStar  className="text-2xl text-blue-500"/> */}
        </div>
      </div>
    </div>
  );
};

export default Completed_task;
