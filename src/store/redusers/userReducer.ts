import { IUserState, UserAction, UserActionType } from "./../../types/todo";

const initialState: IUserState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = (
  state = initialState,
  action: UserAction
): IUserState => {
  switch (action.type) {
    case UserActionType.FETCH_USERS:
      return { users: [], loading: true, error: null };
    case UserActionType.FETCH_USERS_SUCCESS:
      return { users: action.payload, loading: false, error: null };
    case UserActionType.FETCH_USERS_ERROR:
      return { users: [], loading: false, error: action.payload };

    default:
      return state;
  }
};
