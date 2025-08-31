import { createStore, combineReducers } from "redux";
import { booksReducer } from "./reducers/booksReducer";
import { filterReducer } from "./reducers/filterReducer";

const rootReducer = combineReducers({
  books: booksReducer,
  filter: filterReducer,
});

export const store = createStore(rootReducer);

