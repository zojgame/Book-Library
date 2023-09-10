import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LoadingOutlined } from '@ant-design/icons';

import { useToast, useActions, useAppSelector } from "../../hooks";
import { ToastList } from "../../components";
import { getCurrentBook, getError, getIsLoading } from '../../store';
import './styles.css'

const DetailPage = () => {
    const { bookId }= useParams()
    const { toasts, showToast, removeToast } = useToast()
    const currentBook = useAppSelector(getCurrentBook)
    const errorMessage = useAppSelector(getError);
    const isLoading = useAppSelector(getIsLoading);
    const { getBookById, setError } = useActions()
    const navigate = useNavigate()
    
    useEffect(() => {        
        if(bookId){
            getBookById(bookId)
            if(errorMessage){
                showToast(errorMessage)
            }
        }
    }, []);

    useEffect(() => {
        if(errorMessage){
            showToast(errorMessage)
        }
    }, [errorMessage]);
    
    const handleOnGoBackBtnClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault()
        setError('')
        navigate('../')
    }

    return (
        <>
            <div className="header">
            </div>
            {isLoading && <div className='loading_icon_container'><LoadingOutlined className="loading_icon"/></div> }
            {!isLoading &&
                <div className="book_info">
                    <section className={`book_image_container ${currentBook ? 'container_background' : ''}`}>
                        <a href="#" onClick={handleOnGoBackBtnClick}>go back</a>
                        <img src={currentBook?.volumeInfo?.imageLinks?.thumbnail} alt={currentBook?.volumeInfo?.title} />
                    </section>
                    <section className="book_content">
                        <div className="categories">
                            {currentBook?.volumeInfo?.categories?.map((category) => <p key={category}>{category}</p>)}                        
                        </div>
                        <div className="title">{currentBook?.volumeInfo?.title}</div>                
                        <div className="authors">{currentBook?.volumeInfo?.authors?.map((author, index) => 
                        {
                            if(index === currentBook.volumeInfo.authors.length - 1)
                                return <div key={author}>{author}</div>
                                                        
                            return <div key={author}>{`${author}, `}</div>
                        })}
                        </div>
                        
                        <div className="description">{currentBook?.volumeInfo?.description}</div>
                    </section>
                </div> } 
            <ToastList removeToast={removeToast} data={toasts} />      
        </>
    );
};

export { DetailPage }