import axios from "axios"
import { BOOKS_URL } from "./urls"
import { RequestType } from "../types"
import { CATEGORY } from "../const"

const getBooksByTitle = async (request: RequestType) => {
    const categoryFilter = request.category === CATEGORY.ALL ? '' : `+subject:${request.category}`
    const searchParams = `intitle:${request.searchTitle}${categoryFilter}` 
    const url = `${BOOKS_URL}&q=${searchParams}&startIndex=${request.bookStartIndex}&orderBy=${request.orderBy}`
    const response = (await axios.get(url))

    return response.data
}

export { getBooksByTitle }