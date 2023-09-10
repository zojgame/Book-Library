import { SearchOutlined } from '@ant-design/icons';
import { useActions, useAppSelector } from '../../hooks';
import { useState } from 'react';
import { RequestType } from '../../types';
import { getRequestState } from '../../store';
import { ORDER_BY_OPTION, CATEGORY_OPTIONS } from '../../const';
import './styles.css'

const HeaderComponent = () => {
    const { getAllBooks, setRequest } = useActions()
    const [searchValue, setSearchValue] = useState('')
    const requestState = useAppSelector(getRequestState)

    function handleOnSearchSubmit(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        if(searchValue !== ''){
            const request: RequestType = {...requestState, searchTitle: searchValue, bookStartIndex: 0}
            setRequest(request)
            getAllBooks(request)
        }
    }

    function handleOnSearchClick(){
        if(searchValue !== ''){
            const request: RequestType = {...requestState, searchTitle: searchValue, bookStartIndex: 0}
            setRequest(request)
            getAllBooks(request)
        }
    }

    function handleOnSearchChange(event: React.ChangeEvent<HTMLInputElement>): void {
        const inputValue = event.target.value;
        setSearchValue(inputValue)
    }

    function handleOnOrderByChange(event: React.ChangeEvent<HTMLSelectElement>): void {
        const orderBy = event.target.value;
        const request: RequestType = {
            ...requestState,
            orderBy: orderBy
        }

        setRequest(request)
    }

    function handleOnCategoryChange(event: React.ChangeEvent<HTMLSelectElement>): void {
        const category = event.target.value;
        const request: RequestType = {
            ...requestState,
            category: category
        }

        setRequest(request)
    }

    return (
        <header>
            <h1>Search for Books</h1>
            <form className="search_container" onSubmit={handleOnSearchSubmit}>
                <input type="text" className='search_input' onChange={handleOnSearchChange}/>
                <SearchOutlined className='search_icon' onClick={handleOnSearchClick}/>
            </form>
            <div className="filters">
                <div className="categories">
                    <div>Categories</div>                         
                        <select onChange={handleOnCategoryChange}>
                            {
                                CATEGORY_OPTIONS.map((option) => 
                                (<option value={option.value} key={option.id}>{option.label}</option>))
                            }
                        </select>
                </div> 
                <div className="sort-options">
                    <div>Sorting by</div>  
                    <select onChange={handleOnOrderByChange}>
                        {
                            ORDER_BY_OPTION.map((option) => 
                            (<option value={option.value} key={option.id}>{option.label}</option>))
                        }
                    </select>
                </div>               
            </div>
        </header> 
    );
};

export { HeaderComponent }