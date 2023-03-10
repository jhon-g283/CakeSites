// Reducerのエリアス
import { configureStore } from '@reduxjs/toolkit';
import cakeList from '../api/searchCakeSlice';
import cakeDetail from '../api/getItemDetailSlice';
import cartList from '../api/addCartDataSlice';
import infoList from '../api/getInfomationSlice';

export type AppDispatch = typeof store.dispatch; // dispatchの方で怒られるので追加

export const store = configureStore({
  reducer: {
    // reducer名：インポートしたReducerファイル(XX.reducer)
    // useSelectorで引数のstate.Reducer名で読み込むのに必要
    cakereducer: cakeList, //ケーキの一覧
    detailreducer: cakeDetail, //ケーキの詳細
    cartreducer: cartList, //ケーキの詳細
    inforeducer: infoList, //お知らせ情報
  },
});
