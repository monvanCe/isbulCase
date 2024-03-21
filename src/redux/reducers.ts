import { ActionTypes, SET_SEARCH } from './actions';

interface State {
  searchValue: string;
}

const initialState: State = {
  searchValue: '',
};

const reducer = (state = initialState, action: ActionTypes): State => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        searchValue: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
