import { useDispatch, useSelector } from "react-redux";
import { ClearAllTask, DeleteTask } from "../actions/TodoActions";

const ListTodo = () => {
  const taskList = useSelector((state) => state.TodoReducers.TaskList);

  const dispatch = useDispatch();

  return (
    <aside className="flex flex-col w-4/5 h-96 max-h-96 p-5 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700 relative rounded-lg">
      <h3 className="px-3 text-md text-gray-500 uppercase dark:text-gray-400 mb-5">
        My Task&#39;s
      </h3>

      <button
        onClick={() => dispatch(ClearAllTask())}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sticky top-0 w-full"
      >
        Clear ALl
      </button>

      <ul className="flex flex-col break-all">
        {taskList.map((task) => {
          return (
            <li
              key={task.id}
              className="flex items-center gap-2 my-2 justify-between "
            >
              <h2 className="text-gray-300 text-lg">{task.task}</h2>

              <button
                type="button"
                onClick={() => {
                  dispatch(DeleteTask(task.id));
                }}
                className="justify-self-end cursor-pointer text-red-500"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ListTodo;
