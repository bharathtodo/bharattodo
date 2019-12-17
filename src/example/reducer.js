import * as actionTypes from "./actionTypes";
const initialState = {
  todo: null,
  isLoading: false,
  error: null,
  dummyText:"for only reselect"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.REQUEST_TODO:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.REQUEST_TODO_SUCCESS:
      console.log(action)
      return {
        ...state,
        todo: action.payload.todo,
        isLoading: false,
        
      };
    case actionTypes.REQUEST_TODO_FAILUR:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };

    default:
      return state;
  }
}
