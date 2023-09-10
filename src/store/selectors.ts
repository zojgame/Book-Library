import { REDUCERS } from "../const";
import { BooksInfoType, BookType, RequestType, State } from "../types";

const getBooksInfo = (state: State): BooksInfoType => state[REDUCERS.BOOKS_REDUCER].booksInfo

const getBooks = (state: State): BookType[] => state[REDUCERS.BOOKS_REDUCER].books

const getIsLoading = (state: State): boolean => state[REDUCERS.BOOKS_REDUCER].isLoading

const getRequestState = (state: State): RequestType => state[REDUCERS.BOOKS_REDUCER].request

const getError = (state: State): string | null | undefined => state[REDUCERS.BOOKS_REDUCER].errorMessage

const getCurrentBook = (state: State): BookType | undefined => state[REDUCERS.BOOKS_REDUCER].currentBook

export { getBooksInfo, getBooks, getIsLoading, getRequestState, getError, getCurrentBook }