import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { routerReducer, RouterReducerState, RouterStateSerializer } from '@ngrx/router-store';
import { Params, RouterStateSnapshot } from '@angular/router';
import { environment } from '../../environments/environment';
import * as fromUser from './user.reducer';

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const { url, root: { queryParams } } = routerState;
    const { params } = route;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url, params, queryParams };
  }
}

export interface State {
  router: RouterReducerState,
  user: fromUser.State;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  user: fromUser.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectUserState = (state: State) => state.user;
export const selectUserData = createSelector(
  selectUserState,
  (state: fromUser.State) => state.user
);
export const selectUserFetched = createSelector(
  selectUserState,
  (state: fromUser.State) => state.fetched
);
