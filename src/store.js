import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterSlice"

export var store = configureStore({
    reducer : {
        counter : counterReducer

    }
})