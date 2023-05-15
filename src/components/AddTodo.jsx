import { useState } from "react";
import { AddNewTask } from "../actions/TodoActions";
import { useDispatch } from "react-redux";
import { MdCreate } from "react-icons/md";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="w-4/5">
      <div className="relative">
        <input
          className="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Wake at 5 AM..."
          type="search"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          autoFocus
          required
          minLength={1}
        />
        <button
          type="button"
          disabled={todo.trim() == ""}
          onClick={() => {
            dispatch(AddNewTask(todo));
            setTodo("");
          }}
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 min-w-max flex items-center gap-1"
        >
          <MdCreate />
          Create
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
