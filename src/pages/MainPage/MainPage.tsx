import { useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";

import { BooksContainer, HeaderComponent, ToastList } from "../../components";
import { useAppSelector, useActions, useToast } from "../../hooks";
import { getIsLoading, getBooksInfo, getRequestState, getError } from "../../store";
import { RESULT_STEP } from "../../const";
import { RequestType } from "../../types";
import './styles.css';

const MainPage = () => {
    const booksInfo = useAppSelector(getBooksInfo)    
    const isLoading = useAppSelector(getIsLoading)
    const requestState = useAppSelector(getRequestState)
    const errorMessage = useAppSelector(getError)
    const { setBooks } = useActions()
    const { showToast, toasts, removeToast } = useToast()

    useEffect(() => {
        if(errorMessage){
            showToast(errorMessage)                        
        }
        if(booksInfo?.totalItems === 0){
            const message = `Nothing was found by title "${requestState.searchTitle}" and filter "${requestState.category}"`
            setBooks([])
            showToast(message)                        
        }
    }, [errorMessage, booksInfo]);

    const { getAllBooks, setRequest } = useActions()
    

    function onLoadMoreBtnClick() {
        const request : RequestType = {...requestState, bookStartIndex: requestState.bookStartIndex + RESULT_STEP} 
        setRequest(request)
        getAllBooks(request)
    }

    return (<>
        <main>
            <ToastList removeToast={removeToast} data={toasts} />
            <HeaderComponent />                
            <div className="content">
                <div className="books_count">
                    {isLoading 
                        ? <><LoadingOutlined className="loading_icon"/></>
                        : booksInfo?.totalItems !== 0 
                            && booksInfo?.totalItems !== undefined 
                            && <>{`Found ${booksInfo?.totalItems} results`}</>
                    }
                </div>
                <BooksContainer />                
                {booksInfo?.totalItems !== 0 && booksInfo?.totalItems !== undefined && <div className="pagination">
                    {!isLoading && <div onClick={onLoadMoreBtnClick} className="loadmore_btn">Load More</div>}
                    {isLoading && <div><LoadingOutlined className="loading_icon"/></div>}
                </div>}
            </div>
        </main>    
    </>
    );
};

export { MainPage }