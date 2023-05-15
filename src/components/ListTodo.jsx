import { useDispatch, useSelector } from "react-redux";
import { ClearAllTask, DeleteTask } from "../actions/TodoActions";
import { MdDelete } from "react-icons/md";
import { AiOutlineClear, AiFillEdit, AiFillSave } from "react-icons/ai";
import { useState } from "react";

const ListTodo = () => {
  const [editEnable, setEditEnable] = useState(false);

  const taskList = useSelector((state) => state.TodoReducers.TaskList);

  const editTask = () => {
    setEditEnable((prev) => !prev);
  };

  const dispatch = useDispatch();

  return (
    <section className="w-4/5 h-96 max-h-96 p-5 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700 rounded-lg">
      <div className="flex items-center justify-between gap-2">
        <h3 className="px-3 text-md text-gray-500 uppercase dark:text-gray-400 mb-5">
          My Task&#39;s
        </h3>
        {taskList != "" && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => dispatch(ClearAllTask())}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sticky top-0 w-full flex items-center justify-center gap-2"
            >
              <AiOutlineClear />
              Clear All
            </button>

            <button
              className="justify-self-end cursor-pointer text-gray-800 min-w-max bg-gray-300 py-2 px-3 text-sm rounded-lg border border-gray-900 focus:ring-gray-500 font-semibold focus:border-gray-500 flex items-center gap-1"
              onClick={editTask}
            >
              {/* <AiFillSave /> */}
              {/* <AiFillEdit /> */}
              {editEnable ? (
                <>
                  <AiFillSave />
                  Save
                </>
              ) : (
                <>
                  <AiFillEdit />
                  Edit
                </>
              )}
            </button>
          </div>
        )}
      </div>

      <ul className="flex flex-col break-all">
        {[...taskList].reverse().map(({ task, id }) => {
          return (
            <li
              key={id}
              className="flex items-center text-left gap-5 my-2 justify-between text-gray-900 rounded-lg border border-gray-800 p-2"
            >
              <p
                className="text-gray-300 text-sm bg-inherit w-full resize-none h-auto focus-visible:border-none focus:outline-none"
                autoFocus
                contentEditable={editEnable}
                onBlur={(e) => {
                  if (e.target.textContent == "") dispatch(DeleteTask(id));
                }}
              >
                {task.trim()}
              </p>

              <button
                type="button"
                onClick={() => {
                  dispatch(DeleteTask(id));
                }}
                className="justify-self-end cursor-pointer text-red-800 min-w-max bg-red-300 py-2 px-3 text-sm rounded-lg border border-red-900 focus:ring-red-500 font-semibold focus:border-red-500 flex items-center gap-1"
                hidden={true}
              >
                <MdDelete />
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ListTodo;
