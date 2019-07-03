import { FETCH_MARKUPS } from "../actions";

const initialState = {
  markups: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MARKUPS:
      return {
        ...state,
        markups: action.payload
      };
    default:
      return state;
  }
};
