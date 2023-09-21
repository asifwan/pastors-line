import { createStore, combineReducers } from "redux";
import modalReducer from "./reducers/modalReducer";

const rootReducer = combineReducers({
  modals: modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
