import { createAction, createReducer, on, props, createSelector, createFeatureSelector, Action, ActionReducerMap } from '@ngrx/store';
import { MoneyItem } from 'src/interface';


const featureName = 'data'

//
//  Action
//

// DetailItems
export const updateDetailItems = createAction(
  '[DetailItems] Update Detail Items',
  props<{detailItems: MoneyItem[]}>()
);




// maxAmount
export const updateMaxAmount = createAction(
  '[MaxAmount] Update Max Amount',
  props<{maxAmount: number}>()
);



//
//  State
//



export interface State {
  detailItems: MoneyItem[];
  maxAmount: number;
}

export const initialState: State = {
  detailItems: [],
  maxAmount: 0
};


//
//  Reducer
//

export const detailItemsReducer = createReducer(
  initialState,
  on(updateDetailItems, (state, {detailItems}) => {
    return {...state, detailItems: detailItems};
  }),
  on(updateMaxAmount, (state, { maxAmount }) => {
    return {...state, maxAmount: maxAmount};
  }) 
)

export function reducer(state: State | undefined, action: Action){
  return detailItemsReducer(state, action);
}

//
//  Selector
//

const getState = createFeatureSelector<State>(featureName);
export const getDetailItems = createSelector(getState, state => state.detailItems);
export const getMaxAmount = createSelector(getState, state => state.maxAmount);
