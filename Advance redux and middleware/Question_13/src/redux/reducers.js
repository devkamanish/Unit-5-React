import { FETCH_COFFEE_SUCCESS } from "./action";

const initialState = {
  coffees: [],
};

export const coffeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COFFEE_SUCCESS:
      return {
        ...state,
        coffees: action.payload,
      };
    default:
      return state;
  }
};
