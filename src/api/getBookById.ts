import axios from "axios";
import { URL } from "./urls";

const getCurrentBookById = async (bookId: string) => {
    const url = `${URL}/${bookId}`
    const response = (await axios.get(url)
        .then(res => res.data))

    return response
    
}

export { getCurrentBookById }

