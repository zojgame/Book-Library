import { BooksContainer, HeaderComponent, ToastList } from "../../components";
import { useAppSelector, useActions, useToast } from "../../hooks";
import { getIsLoading, getBooksInfo, getRequestState, getError } from "../../store";
import { RESULT_STEP } from "../../const";
import { RequestType } from "../../types";
import './styles.css';

import { LoadingOutlined } from "@ant-design/icons";
import { useEffect } from "react";

const MainPage = () => {
    const booksInfo = useAppSelector(getBooksInfo)    
    const isLoading = useAppSelector(getIsLoading)
    const requestState = useAppSelector(getRequestState)
    const { showToast, toasts, removeToast } = useToast()
    const errorMessage = useAppSelector(getError)

    useEffect(() => {
        if(errorMessage){
            showToast(errorMessage)                        
        }
        if(booksInfo?.totalItems === 0){
            const message = `По запросу ${requestState.searchTitle} ничего не найдено`
            showToast(message)                        
        }
    }, [errorMessage, booksInfo]);

    console.log('process.env', (import.meta.env.VITE_REACT_API_KEY))


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