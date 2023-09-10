import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { getBooks } from "../../store";
import './styles.css'

const BooksContainer = () => {
    const books = useAppSelector(getBooks)
    const navigate = useNavigate()    

    const handleOnBookClick = (id: string) => {
        return () => {
            navigate(`/${id}`)
        }
    }
    
    return (
        <div className="books_container">
            {books?.map((book) => (
            <div className="book" key={book.id} onClick={handleOnBookClick(book.id)}>
                <img src={book?.volumeInfo?.imageLinks?.smallThumbnail} alt={book?.volumeInfo?.title} />
                <div className="category">{book?.volumeInfo?.categories?.[0]}</div>
                <div className="title">{book?.volumeInfo?.title}</div>
                {book?.volumeInfo?.authors?.slice(0, 4).map((author) => <div className="author" key={author}>{author}</div>)}
            </div>))}
        </div>);
};

export { BooksContainer }
