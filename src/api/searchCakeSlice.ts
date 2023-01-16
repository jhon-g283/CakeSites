import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { itemData } from "../types";

// ToDo方の宣言（Interface）を１まとめにする
//
//

// ToDo検索失敗やエラー発生時のデフォルト値設定やペイロードの値チェック
//
//

// ToDo 問合せ先のURLをENVに設定する
//
//

// Stateの型の設定
export interface dataList {
  itemlist?: {
    itemName?: any;
    imageUrl?: any;
    priceHole?: any;
    pricePieace?: any;
    kcal?: any;
  }[];
  status: string;
}

type dataListType = {
  List?: itemData;
  status?: string;
};

const test: dataList = {
  itemlist: [
    { itemName: "", imageUrl: "", priceHole: "", pricePieace: "", kcal: "" },
  ],
  status: "",
};

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
const ulr: string = "http://localhost:3000/api/searchCakeApi?q=%22qq%22";

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
export const fetchItems = createAsyncThunk<dataList>(
  "fetchItem_Cake",
  async (arg, thunkAPI) => {
    const result = getItems(ulr); // API問い合わせ
    return result;
  }
);

//https:future-architect.github.io/articles/20200501/

const searchCakeListSlice = createSlice({
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
      const item = action.payload.itemlist; //payloadから取得したデータを取り出す

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
export default searchCakeListSlice.reducer;