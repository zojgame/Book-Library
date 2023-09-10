import { RESULT_STEP } from "../const"

const API_KEY = `${import.meta.env.VITE_REACT_API_KEY}`

const URL = `https://www.googleapis.com/books/v1/volumes`
const BOOKS_URL = `${URL}?key=${API_KEY}&maxResults=${RESULT_STEP}`

export { BOOKS_URL, URL }