import { FETCH_RESOURCES } from "../actions";

const initialState = {
  resources: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESOURCES:
      return {
        ...state,
        resources: action.payload
      };
    default:
      return state;
  }
};
