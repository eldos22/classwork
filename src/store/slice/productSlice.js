import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async function () {
        const response = await fetch ('https://jsonplaceholder.typicode.com/todos?_limit=10')
        const data = await response.json()
        console.log(data);
        return data
    }
)

const initialState = {
    products: []
}

const productSlice = createSlice ({
    name: 'products',
    initialState,
    reducers:{
        deleteProduct: (state, action) => {
            state.products = state.products.filter(book => book.id !== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action)=>{
            state.products = action.payload
        })
    }
})

export const {deleteProduct} = productSlice.actions;

export default productSlice.reducer