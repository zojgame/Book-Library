import { booksReducer } from ".";
import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
    'booksReducer': booksReducer.reducer
})

export { rootReducer }