import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface test {
  item?: string;
}

const initialState: test = {
  item: "5",
};

// fetchで取得する部分
const getItems = async () => {
  console.log("fetch! reducer!");
  const requestUrl = "http://localhost:3000/api/hello?q=%22qq%22";

  const result = await fetch(requestUrl)
    .then((responce) => {
      console.log("fetch responce reducer");
      console.log(responce);
      return responce.json();
    })
    .then((data) => {
      console.log("fetch data reducer");
      console.log(data);
      const str: string = "data.name";
      return str;
    })
    .catch(() => {
      return "error";
    });

  return { item: "tes" };
};

// Thunk
export const fetchItems = createAsyncThunk<test>(
  "fetchItem_Cake",
  async (arg, thunkAPI) => {
    const result = getItems();
    return result;
  }
);

//https:future-architect.github.io/articles/20200501/

const searchCakeListSlice = createSlice({
  name: "cakeList",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // 通信中
    builder.addCase(fetchItems.pending, (state, action) => {
      state.item = "0";
    });

    // 通信完了
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      // state.loading = true;
      // const item = action.payload;
      const item = "000";
      console.log("payload");
      console.log(action.payload);

      state.item = item;
    });

    // 通信失敗
    builder.addCase(fetchItems.rejected, (state, action) => {
      state.item = "2";
    });
  },
});

// selectore
export const searchResultOfCake = (cakeList: test) => cakeList;

export default searchCakeListSlice.reducer;
