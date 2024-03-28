import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice";
import bookSlice from "./slice/bookSlice";

export default configureStore ({
    reducer: {
        counter: counterSlice,
        books: bookSlice
    }
})