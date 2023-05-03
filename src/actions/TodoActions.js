export const AddNewTask = (task) => {
  return {
    type: "ADD_NEW_TASK",
    payload: {
      id: new Date().getTime().toString(),
      task,
    },
  };
};

export const DeleteTask = (id) => {
  return {
    type: "DELETE_TASK",
    payload: {
      id,
    },
  };
};

export const ClearAllTask = () => {
  return {
    type: "CLEAR_ALL_TASK",
  };
};
