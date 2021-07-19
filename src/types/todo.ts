export interface IUserState {
  users: any[];
  loading: boolean;
  error: null | string;
}
//create constants in enum
export enum UserActionType {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface IFetchUsersAction {
  type: UserActionType.FETCH_USERS;
}
interface IFetchUsersSuccessAction {
  type: UserActionType.FETCH_USERS_SUCCESS;
  payload: any[];
}
interface IFetchUsersErrorAction {
  type: UserActionType.FETCH_USERS_ERROR;
  payload: string;
}
export type UserAction =
  | IFetchUsersAction
  | IFetchUsersSuccessAction
  | IFetchUsersErrorAction;
//initial State with IUserState interface
