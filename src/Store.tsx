// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./ColorSlice";
import partsReducer from "./PartsSlice";
import statusReducer from "./StatusSlice";

export const store = configureStore({
  reducer: {
    string: colorReducer,
    parts: partsReducer,
    statusParts: statusReducer,
  },
});

// Tipo para o estado global (RootState)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
