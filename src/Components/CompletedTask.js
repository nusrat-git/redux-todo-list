import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineDelete } from "react-icons/md";
import { deletedTodo } from "./TodoSlice";

const CompletedTask = () => {
  const [open, setOpen] = useState(false);
  const completedTodos = useSelector(state => state.todos.completedTodos);

  const dispatch = useDispatch();

  const deleteTask = id => {
    dispatch(deletedTodo(id));
  }


  return (
    <div className="container mx-auto my-10 md:px-8 px-2">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center cursor-pointer mx-5"
      >
        {open ? <IoIosArrowForward /> : <IoIosArrowDown />}
        <h3 className="mx-3">Completed</h3>
        <span className="">{completedTodos.length}</span>
      </div>

      {
        completedTodos.length === 0 ?
          <div className="mt-6">
            <h1 className="text-center pb-5">You have completed 0 task</h1>
          </div>
          :
          <div className={`mt-2 ${!open && "hidden"}`}>
            <div>
              {
                completedTodos.length === 1 ?
                  <h1 className="text-center my-4">You have completed {completedTodos.length} task</h1>
                  :
                  <h1 className="text-center my-4">You have completed {completedTodos.length} tasks</h1>
              }
            </div>
            {
              completedTodos.map(completed =>
                <div key={completed.id} className="hover:bg-gray-100 bg-white flex justify-between py-3 px-5 mt-3 shadow  rounded-md">
                  <div className="flex items-center line-through">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-info checkbox-sm"
                    />

                    <h3 className="ml-5">{completed.task}</h3>
                  </div>
                  <button onClick={() => deleteTask(completed.id)}>
                    <MdOutlineDelete className="text-2xl text-blue-500" />
                  </button>
                </div>)
            }
          </div>
      }


    </div>
  );
};

export default CompletedTask;
