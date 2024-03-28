import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
    value: 1234
}

const counterSlice = createSlice ({
    name: 'counter',
    initialState,
    reducers:{
        increment: (state) => {
            state.counter +=1;
        },
        decrement: (state) => {
            state.counter -=1;
        },
        // },
        // incrementByVal: (state, action) => {
        //     state.counter += action.payload;
        // },
        incrementByVal: (state, {payload}) => {
            state.counter += payload;
        }
    }
})

export const {increment, decrement, incrementByVal} = counterSlice.actions;

export default counterSlice.reducer