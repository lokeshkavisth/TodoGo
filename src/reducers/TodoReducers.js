const initialState = {
  TaskList: [],
};

export const TodoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_TASK": {
      const { id, task } = action.payload;
      return {
        ...state,
        TaskList: [
          ...state.TaskList,
          {
            id,
            task,
          },
        ],
      };
    }
    case "DELETE_TASK": {
      const newTaskList = state.TaskList.filter(
        (task) => task.id !== action.payload.id
      );
      return {
        ...state,
        TaskList: newTaskList,
      };
    }

    case "CLEAR_ALL_TASK": {
      return {
        ...state,
        TaskList: [],
      };
    }
    default:
      return state;
  }
};
