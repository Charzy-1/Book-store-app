// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Assuming you have a rootReducer combining multiple slices

const store = configureStore({
  reducer: rootReducer,
});

export default store;
