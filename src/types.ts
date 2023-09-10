import { store } from "./store";

type State = ReturnType<typeof store.getState>

type ApiDispatch = typeof store.dispatch

interface BookType {
    id: string,
    volumeInfo: {
        title: string,
        authors: string[],
        publishedData: string,
        description: string,
        pageCount: number,
        printType: string,
        categories: string[],
        imageLinks: {
            smallThumbnail: string,
            thumbnail: string
        },
        previewLink: string
    }
}

interface BooksInfoType {
    kind: string,
    totalItems: number | undefined,
    items: BookType[]
}

interface ThunkApiType {
    dispatch: ApiDispatch,
    state: InitialState,
    extra: {
        jwt: string
    },

    rejectValue: string
}

interface ValidationErrors{
    errorMessage: string
}

interface InitialState{
    booksInfo: BooksInfoType,
    books: BookType[],    
    isLoading: boolean,
    errorMessage: string | null | undefined,
    request: RequestType,
    currentBook: BookType | undefined
}

interface RequestType{
    bookStartIndex: number,
    searchTitle: string,
    orderBy: string,
    category: string
}

interface OptionType {
    id: string,
    value: string,
    label: string
}

interface ToastType{
    id: string,
    message: string,
    type: string
}

interface IToastListProps{
    removeToast: (toast: string) => void,
    data: ToastType[]
}

interface IToastProps {
    message: string,
    type: string,
    onClose: () => void
}

export type { State, ApiDispatch, BookType, 
            BooksInfoType, ValidationErrors, 
            InitialState, ThunkApiType, RequestType,
            OptionType, ToastType, IToastListProps, IToastProps}