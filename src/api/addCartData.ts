import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import { cartDataArray } from '../../src/types';

// State初期値の設定
const initialState: cartDataArray = {
  data: [
    {
      cartId: 0,
      itemId: 0,
      itemName: '---',
      imageUrl: '---',
      imageUr2: '---',
      price: 100,
      peaceCount: 1,
      // priceHole: '---',
      // pricePieace: '---',
      // kcal: '---',
      code: '---',
      // discription: '--',
      options: [
        { name: '--', param: 0, count: 1 },
        { name: '--', param: 0, count: 1 },
        { name: '--', param: 0, count: 1 },
      ],
    },
  ],
  count: 0,
  status: 'load',
};

//問合せURL

//問合せURL
const domain = process.env.NEXT_PUBLIC_HOST || 'http://localhost:3000/'; //環境変数鵜より取得
const baseulr: string = domain + 'api/searchCakeApi?q=%22qq%22';

// APIへの問い合わせ関数（fetchで取得する部分）
const getItems = async (requestUrl: string) => {
  console.log('fetch! reducer!');

  const result = await fetch(requestUrl)
    .then((responce) => {
      return responce.json();
    })
    .then((data: cartDataArray) => {
      // console.log("fetch data reducer");

      return data;
    })
    .catch(() => {
      // エラー発生時
      return { status: 'error' };
    });

  return result;
};

// Thunk
// 第１引数：返り値の型
// 第２引数：受け渡す引数の型
export const pushCartData = createAsyncThunk<cartDataArray, number>(
  'fetchItem_Cake',
  async (n: number, thunkAPI) => {
    const requesrUrl: string = baseulr + 'id=' + n.toString() + '&';

    const result = await getItems(requesrUrl); // API問い合わせ
    return result;
  }
);

//https:future-architect.github.io/articles/20200501/

const addCartSlicer = createSlice({
  name: 'cartList',
  initialState: initialState, //初期のStateセット
  reducers: {
    addCart(state, action) {
      // カートボタンで追加した時の処理
      console.log('action addCart ');

      const pushData = action.payload?.data; //追加するデータ
      const stateData = current(state.data)?.concat(pushData); //現在のStateに追加する
      const newCount: number = state?.count != undefined ? state?.count + 1 : 0;

      state.data = stateData; //State更新
      state.count = newCount;
    },
    removeCart(state, action) {
      if (action.payload == 'test') {
      }
    },
    editCart(state, action) {},
  },
  extraReducers: (builder) => {
    // 通信中
    builder.addCase(pushCartData.pending, (state, action) => {
      // state.status = 'pending';
    });

    // 通信完了
    builder.addCase(pushCartData.fulfilled, (state, action) => {
      // state.status = 'success';
    });

    // 通信失敗
    builder.addCase(pushCartData.rejected, (state, action) => {
      // state.status = 'error';
    });
  },
});

// selectorをエクスポート
// export const searchResultOfCake = (cakeList: cakeDetail) => cakeList;
export const addCartData = (cartList: cartDataArray) => cartList;
export const { addCart } = addCartSlicer.actions; // Action Createrをエクスポート

// Reducerをエクスポート
// 読み込み時にはuseSelectで[state.設定したreducer名.State名]で読み込む
export default addCartSlicer.reducer;
