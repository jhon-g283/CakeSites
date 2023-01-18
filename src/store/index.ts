// Reducerのエリアス
import { configureStore } from "@reduxjs/toolkit";
import cakeList from "../api/searchCakeSlice";
import cakeDetail from "../api/getItemDetail";

export type AppDispatch = typeof store.dispatch; // dispatchの方で怒られるので追加

// ToDo カート機能の商品保持用の Store実装
//
//

// ToDo 詳細画面用のスライサー（モックでデータを取るならReduxなしでデータ保持はいらないはず）
//
//

export const store = configureStore({
  reducer: {
    // reducer名：インポートしたReducerファイル(XX.reducer)
    // useSelectorで引数のstate.Reducer名で読み込むのに必要
    cakereducer: cakeList, //ケーキの一覧
    detailreducer: cakeDetail, //ケーキの詳細
  },
});
