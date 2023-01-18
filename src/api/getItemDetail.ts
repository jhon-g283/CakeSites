import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { cakeDetail } from "../../src/types";
// Stateの型の設定
export interface dataList {
  itemlist?: {
    id?: string;
    itemName?: any;
    imageUrl?: any;
    priceHole?: any;
    pricePieace?: any;
    kcal?: any;
    code?: string;
  }[];
  status: string;
}

// State初期値の設定
const initialState: dataList = {
  itemlist: [
    {
      itemName: "**",
      imageUrl: "",
      priceHole: "",
      pricePieace: "",
      kcal: "",
    },
  ],
  status: "***",
};

//問合せURL
const ulr: string = "http://localhost:3000/api/getitemDetailApi?q=%yy%22";

// APIへの問い合わせ関数（fetchで取得する部分）
const getItems = async (url: string) => {
  console.log("fetch! reducer!");
  const requestUrl = ulr;

  const result = await fetch(requestUrl)
    .then((responce) => {
      // console.log("fetch responce reducer");
      // console.log(responce);
      return responce.json();
    })
    .then((data: dataList) => {
      // console.log("fetch data reducer");
      // console.log(data);
      // const str: string = "data.name";
      return data;
    })
    .catch(() => {
      // エラー発生時
      return { status: "error" };
    });

  return result;
};

// Thunk
export const fetchItems = createAsyncThunk<cakeDetail>(
  "fetchItem_Cake",
  async (arg, thunkAPI) => {
    const result = getItems(ulr); // API問い合わせ
    return result;
  }
);

//https:future-architect.github.io/articles/20200501/

const getItemDetailSlice = createSlice({
  name: "cakeList",
  initialState: initialState, //初期のStateセット
  reducers: {},
  extraReducers: (builder) => {
    // 通信中
    builder.addCase(fetchItems.pending, (state, action) => {
      state.status = "pending";

      console.log("pending--");
      console.log(state.itemlist);
      console.log(state.status);
    });

    // 通信完了
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      // state.loading = true;
      const item = action.payload.cakeData; //payloadから取得したデータを取り出す

      // console.log("payload");

      state.itemlist = item;
      state.status = "success";

      // console.log(action.payload);
      // console.log(state.itemlist);
      // console.log(state.status);
    });

    // 通信失敗
    builder.addCase(fetchItems.rejected, (state, action) => {
      state.status = "error";
    });
  },
});

// selectorをエクスポート
export const searchResultOfCake = (cakeList: dataList) => cakeList;

// Reducerをエクスポート
// 読み込み時にはuseSelectで[state.設定したreducer名.State名]で読み込む
export default getItemDetailSlice.reducer;
