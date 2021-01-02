import { ActionReducerMap } from '@ngrx/store';

import * as fromData from './data';

export interface AppState{
  data: fromData.State;
}

export const reducers: ActionReducerMap<AppState> = {
  data: fromData.reducer
};