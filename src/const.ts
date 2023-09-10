import { OptionType } from "./types"

enum REDUCERS {
    BOOKS_REDUCER = 'booksReducer'
}

enum ORDER_BY{
    RELEVANCE = 'relevance',
    NEWEST = 'newest'
}

enum CATEGORY{
    ALL = 'all',
    ART = 'art',
    BIOGRAPHY = 'biography',
    COMPUTERS = 'computers',
    HISTORY = 'history',
    MEDICAL = 'medical',
    POETRY = 'poetry'
}

const ORDER_BY_OPTION : OptionType[] = [
    {value: ORDER_BY.RELEVANCE, id: '0', label: 'Relevance'},
    {value: ORDER_BY.NEWEST, id: '1', label: 'Newest'},
]

const CATEGORY_OPTIONS : OptionType[] = [
    {value: CATEGORY.ALL, id: '0', label: 'All'},
    {value: CATEGORY.BIOGRAPHY, id: '1', label: 'Biography'},
    {value: CATEGORY.COMPUTERS, id: '2', label: 'Computers'},
    {value: CATEGORY.HISTORY, id: '3', label: 'History'},
    {value: CATEGORY.MEDICAL, id: '4', label: 'Medical'},
    {value: CATEGORY.POETRY, id: '5', label: 'Poetry'},
]

const RESULT_STEP = 30

export { REDUCERS, ORDER_BY, ORDER_BY_OPTION, CATEGORY_OPTIONS, RESULT_STEP, CATEGORY }