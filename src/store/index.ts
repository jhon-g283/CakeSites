// Reducerのエリアス
import { configureStore } from "@reduxjs/toolkit";
import cake from "../api/searchCakeList";
export type AppDispatch = typeof store.dispatch; // dispatchの方で怒られるので追加

export const store = configureStore({
  reducer: {
    // reducerめい：インポートしたReducerファイル(XX.reducer)
    cakereducer: cake,
  },
});
