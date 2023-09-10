import { createAsyncThunk } from "@reduxjs/toolkit"
import { BookType, BooksInfoType, RequestType, ThunkApiType, ValidationErrors } from "../types"
import { getBooksByTitle, getCurrentBookById } from "../api"
import { AxiosError } from "axios"

const getAllBooks = createAsyncThunk<BooksInfoType, RequestType, ThunkApiType>(
    'books/by-title',
    async (request, thunkApi) => {       
        try{
            const response = await getBooksByTitle(request)
            return response
        }catch (err) {
            const error = (err as AxiosError<ValidationErrors>)
            return thunkApi.rejectWithValue(error?.message)
        }
    }
)

const getBookById = createAsyncThunk<BookType, string, ThunkApiType>(
    'book/by-id',
    async (request, thunkApi) => {       
        try{
            const response = await getCurrentBookById(request)
            return response
        }catch (err) {
            const error = (err as AxiosError<ValidationErrors>)
            return thunkApi.rejectWithValue(error?.message)
        }
    }
)

export { getAllBooks, getBookById }