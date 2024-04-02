import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    carts: [],
    books: [
    {id:1, name:'Азбука'},
    {id:2, name:'1984'},
    {id:3, name:'Как выучить JS за 2 дня'}]
}

const bookSlice = createSlice ({
    name: 'books',
    initialState,
    reducers:{
        sortedBooks: (state, {payLoad}) => {
            switch (payLoad) {
                case 'low':
                    state.books.sort((a,b) => a.id - b.id)
                    break;
                case "high":
                    state.books.sort((a,b) => b.id - a.id)
                    break;
            }
        },
        deleteBook: (state, action) => {
            state.books = state.books.filter(book => book.id !== action.payload)
        },
        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        addCart: (state, action) => {
            state.carts(action.payload)
        }
    }
})

export const {sortedBooks, deleteBook, addBook, addCart} = bookSlice.actions;

export default bookSlice.reducer