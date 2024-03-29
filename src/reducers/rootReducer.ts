import { combineReducers } from "@reduxjs/toolkit";

const dummyReducer = (state = {}) => {
  return state;
};

const rootReducer = combineReducers({
  dummy: dummyReducer,
});

export default rootReducer;