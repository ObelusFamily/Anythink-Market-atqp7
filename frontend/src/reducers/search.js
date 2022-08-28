import { UPDATE_SEARCH_KEYWORD } from "../constants/actionTypes";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_KEYWORD:
      return { ...state, keyword: action.value };
    default:
      return state;
  }
};

export default reducer;
