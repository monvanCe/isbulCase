export const SET_SEARCH = 'SET_SEARCH';

interface SetSearchAction {
  type: typeof SET_SEARCH;
  payload: string;
}

export interface ActionTypes {
  [key: string]: SetSearchAction;
}

export const setSearch = (query: string): SetSearchAction => ({
  type: SET_SEARCH,
  payload: query,
});
