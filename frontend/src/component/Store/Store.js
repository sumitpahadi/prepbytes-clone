import { configureStore } from "@reduxjs/toolkit";
import Slice from "../Slice/Createslice"
const store = configureStore({
  reducer: {
    cart: Slice,
  },
});
export default store;