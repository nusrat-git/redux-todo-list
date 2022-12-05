import React from "react";
import { useForm } from "react-hook-form";
import { MdOutlineDelete } from 'react-icons/md';
import { useSelector, useDispatch } from "react-redux";
import { addTodo, completedTodo, deletedTodo } from "./TodoSlice";

const AddTaskList = () => {
  const todos = useSelector(state => state.todos.todos);

  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    const dataobj = { id: todos.indexOf(todos[todos.length - 1]) + 2, task: data.todo }
    dispatch(addTodo(dataobj));
  };

  const complete = task => {
    dispatch(completedTodo(task));
  }

  const deleteTask = id => {
    dispatch(deletedTodo(id));
  }

  return (
    <div className="container mx-auto mt-5 md:px-8 px-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between py-3 px-5 shadow-md rounded-md bg-white">
          <input type="text" {...register("todo", { required: true })} placeholder="Add a task" className="ml-5 bg-transparent outline-none border-none w-96 "  />
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </div>
      </form>


      {/* all task */}
      {
        todos.length === 0 ?

          <div>
            <h1 className="text-center mt-6">You have 0 task</h1>
          </div>

          :

          <div className="mt-10">
            <div>
              {
                todos.length === 1 ?
                  <h1 className="text-center pb-5">You have {todos.length} task</h1> 
                  :
                  <h1 className="text-center pb-5">You have {todos.length} tasks</h1>
              }
            </div>
            {
              todos.map((todoTask) =>
                <div key={todoTask.id} className="hover:bg-gray-100 flex justify-between py-3 px-5 mt-3 shadow  rounded-md bg-white">
                  <div className="flex items-center">
                    <button onClick={() => complete(todoTask)}><input type="checkbox" className="checkbox checkbox-info checkbox-sm" /></button>
                    <h3 className="ml-5">{todoTask.task}</h3>
                  </div>
                  <button onClick={() => deleteTask(todoTask.id)}>
                    <MdOutlineDelete className="text-2xl text-blue-500" />
                  </button>
                </div>
              )
            }

          </div>

      }
    </div>
  );
};

export default AddTaskList;
