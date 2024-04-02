import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice";
import bookSlice from "./slice/bookSlice";
import productSlice from "./slice/productSlice";

export default configureStore ({
    reducer: {
        counter: counterSlice,
        books: bookSlice,
        products: productSlice
    }
})