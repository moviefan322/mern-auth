import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
  middleware: (getDefaulteMiddleware) => getDefaulteMiddleware(),
  devTools: true 
});

export default store;