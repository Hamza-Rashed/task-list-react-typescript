import { NotificationState, NotificationAction, SET_NOTIFICATION } from "../types";

const initialState: NotificationState = {
  message: '',
  type: 'success'
}

export default (state = initialState, action: NotificationAction): NotificationState => {
  switch(action.type) {
    case SET_NOTIFICATION:
      return {
        message: action.payload.msg,
        type: action.payload.type
      }

    default:
      return state;
  }
}