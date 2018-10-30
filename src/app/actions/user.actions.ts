import { Action } from '@ngrx/store';

export enum UserActionTypes {
  LoadUser = '[User] Load User'
}

export class LoadUser implements Action {
  readonly type = UserActionTypes.LoadUser;
  constructor(public user: any) {}
}

export type UserActions = LoadUser;
