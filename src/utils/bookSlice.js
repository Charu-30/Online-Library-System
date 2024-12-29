import {createSlice} from "@reduxjs/toolkit";
import { books } from "./mockdata";

const bookSlice= createSlice({
    name: "book",
    initialState: {
        items: [],
    },
    reducers: {
        addBook: (state, action)=>{
            state.items.push(action.payload);
        },
        deleteBook: (state, action) => {
            state.items = state.items.filter((book) => book.id !== action.payload);
          },
    }
});

export const {addBook, deleteBook}= bookSlice.actions;

export default bookSlice.reducer;