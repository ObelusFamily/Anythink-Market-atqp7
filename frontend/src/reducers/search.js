import {
  TOGGLE_SEARCH_BOX,
  UPDATE_SEARCH_KEYWORD,
} from "../constants/actionTypes";

const defaultState = {
  keyword: "",
  showSearch: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_KEYWORD:
      return { ...state, keyword: action.value };
    case TOGGLE_SEARCH_BOX:
      return { ...state, showSearch: !state.showSearch };
    default:
      return state;
  }
};

export default reducer;
