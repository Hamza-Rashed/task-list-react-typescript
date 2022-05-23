import {
  List,
  ListsAction,
  ADD_LIST,
  GET_LISTS,
  GET_LIST_BY_ID,
  SET_LISTID_TO_DELETE,
  SET_LIST_TO_EDIT,
  SET_SELECTED_LIST,
  DELETE_LIST,
  UPDATE_LIST,
  Task,
  ADD_TASK,
  SET_TASK_TO_DELETE,
  UNSET_TASK_TO_DELETE,
  DELETE_TASK,
  SET_TASK_TO_EDIT,
  UNSET_TASK_TO_EDIT,
  UPDATE_TASK,
} from "../types";

export const addList = (list: List): ListsAction => {
  return {
    type: ADD_LIST,
    payload: list,
  };
};

export const getLists = (): ListsAction => {
  return {
    type: GET_LISTS,
  };
};

export const getListById = (id: string): ListsAction => {
  return {
    type: GET_LIST_BY_ID,
    payload: id,
  };
};

export const setListIdToDelete = (id: string): ListsAction => {
  return {
    type: SET_LISTID_TO_DELETE,
    payload: id,
  };
};

export const setListToEdit = (id: string): ListsAction => {
  return {
    type: SET_LIST_TO_EDIT,
    payload: id,
  };
};

export const setSelectedList = (id: string): ListsAction => {
  return {
    type: SET_SELECTED_LIST,
    payload: id,
  };
};

export const deleteList = (id: string): ListsAction => {
  return {
    type: DELETE_LIST,
    payload: id,
  };
};

export const updateList = (id: string, name: string): ListsAction => {
  return {
    type: UPDATE_LIST,
    payload: {
      id,
      name,
    },
  };
};

export const addTask = (task: Task, list: List): ListsAction => {
  return {
    type: ADD_TASK,
    payload: {
      task,
      list,
    },
  };
};

export const setTaskToDelete = (task: Task, list: List): ListsAction => {
  return {
    type: SET_TASK_TO_DELETE,
    payload: {
      task,
      list,
    },
  };
};

export const unsetTaskToDelete = (): ListsAction => {
  return {
    type: UNSET_TASK_TO_DELETE,
  };
};

export const deleteTask = (task: Task, list: List): ListsAction => {
  return {
    type: DELETE_TASK,
    payload: {
      task,
      list,
    },
  };
};

export const setTaskToEdit = (task: Task, list: List): ListsAction => {
  return {
    type: SET_TASK_TO_EDIT,
    payload: {
      task,
      list,
    },
  };
};

export const unsetTaskToEdit = (): ListsAction => {
  return {
    type: UNSET_TASK_TO_EDIT,
  };
};

export const updateTask = (
  taskId: string,
  taskName: string,
  taskState: boolean,
  list: List
): ListsAction => {
  return {
    type: UPDATE_TASK,
    payload: {
      taskId,
      taskName,
      taskState,
      list,
    },
  };
};
