import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import posts from "../modules/ListSlice";
import comments from "../modules/DetailSlice";
/*reducer toolkit Slice.reducer
 */

// 내가 만든 리듀서를 넣어준다
const store = configureStore({
  reducer: {
    posts: posts,
    comments: comments,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
