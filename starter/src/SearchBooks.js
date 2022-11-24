import {useEffect, useState} from "react";
import * as BooksAPI from "./BooksAPI";
import {Link} from "react-router-dom";
import ListBooks from "./ListBooks";



const SearchBooks = ()=>{

    const [books, setBooks] = useState([]);

    useEffect(()=>{
        const getBooks = async ()=>{
          const res = await BooksAPI.getAll();
          console.log(res);
          setBooks(res);
        }
    
        getBooks();
    
    }, []);

    return (
        <div>
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        />
                    </div>
                    </div>
                    <div className="search-books-results">
                    <ol className="books-grid"></ol>
                </div>
            </div>
            <ListBooks books ={books}/>
        </div>
        
    )

}
export default SearchBooks;