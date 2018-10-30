import { Action } from '@ngrx/store';
import { UserActions, UserActionTypes } from '../actions/user.actions';

export interface State {
  user: any;
  fetched: boolean;
}

export const initialState: State = {
  user: null,
  fetched: false
};

export function reducer(state = initialState, action: UserActions): State {
  switch (action.type) {

    case UserActionTypes.LoadUser:
      return {
        ...state,
        user: action.user,
        fetched: true
      };

    default:
      return state;
  }
}
