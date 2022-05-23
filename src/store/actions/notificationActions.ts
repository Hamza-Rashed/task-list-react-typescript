import { NotificationAction, SET_NOTIFICATION } from "../types";

export const setNotification = (msg: string, type: string = 'success'): NotificationAction => {
  return {
    type: SET_NOTIFICATION,
    payload: {
      msg,
      type
    }
  }
}