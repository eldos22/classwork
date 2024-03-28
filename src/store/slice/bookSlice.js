import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [
    {id:1, name:'Азбука'},
    {id:2, name:'1984'},
    {id:3, name:'Как выучить JS за 2 дня'}]
}

const bookSlice = createSlice ({
    name: 'book',
    initialState,
    reducers:{
        deleteBook: (state) => {
            state.book +=1;
        }
    }
})

export const {deleteBook} = bookSlice.actions;

export default bookSlice.reducer