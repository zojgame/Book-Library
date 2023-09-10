import { createSlice } from "@reduxjs/toolkit";
import { CATEGORY, REDUCERS, ORDER_BY } from "../const";
import { getAllBooks, getBookById } from "../asyncActions";
import {  InitialState } from "../types";

const initialState : InitialState  = {
    booksInfo: {
        kind: "",
        totalItems: undefined,
        items: []
    },
    currentBook: undefined,
    books: [],
    isLoading: false,
    errorMessage: '',
    request: {
        bookStartIndex: 0,
        searchTitle: '',
        orderBy: ORDER_BY.RELEVANCE,
        category: CATEGORY.ALL
    }
}

const booksReducer = createSlice({
    name: REDUCERS.BOOKS_REDUCER,
    initialState,
    reducers: {
        setBooks: (state, action) => {
            state.books = action.payload
        },
        setRequest: (state, action) => {
            state.request = action.payload
        },
        setError: (state, action) => {
            state.errorMessage = action.payload
        }
    },
    extraReducers: builder => {
        builder
        .addCase(getAllBooks.pending, state => {
            state.isLoading = true
            state.errorMessage = null
        })
        .addCase(getAllBooks.fulfilled, (state, action) => {
            state.isLoading = false,
            state.booksInfo = action.payload
            state.errorMessage = null
            
                if(state.request.bookStartIndex === 0){
                    state.books = action.payload.items
                }
                else if(action.payload.items){ 
                    state.books = [...state.books, ...action.payload.items]
                }
        })
        .addCase(getAllBooks.rejected, (state, action) => {
            state.isLoading = false

            if(action.payload){
                state.errorMessage = action.payload
            }
            else{
                state.errorMessage = action.error.message
            }
        })
        .addCase(getBookById.pending, state => {
            state.isLoading = true
            state.errorMessage = null
        })
        .addCase(getBookById.fulfilled, (state, action) => {
            state.isLoading = false,
            state.currentBook = action.payload
            state.errorMessage = null
        })
        .addCase(getBookById.rejected, (state, action) => {
            state.isLoading = false

            if(action.payload){
                state.errorMessage = action.payload
            }
            else{
                state.errorMessage = action.error.message
            }
        })
    }
})

export const { actions, reducer } = booksReducer
export { booksReducer }