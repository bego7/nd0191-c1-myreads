import {useEffect, useState} from "react";
import * as BooksAPI from "./BooksAPI";
import {Link} from "react-router-dom";
import ListBooks from "./ListBooks";

const SearchBooks = ()=> {

        const [query, setQuery] = useState('');
        const [books, setBooks] = useState([]);
        const [availability, setAvailability] = useState(false);

        const updateQuery = ((query)=>{
            setQuery(query)
            searchBook(query);
        })

        const searchBook = (query)=>{
            const search = async ()=> {
                const res = await BooksAPI.search(query,20);
                console.log("Tha value of res is ",res);
                if(!res || res.error){
                    console.log("NO BOOKS WITH THAT NAME");
                    setAvailability(false);
                    setBooks([]);
                }
                    
                else{
                    setBooks(res);
                    setAvailability(true);
                }
            }
            
            search();
            
        }

    return (
        <div>
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        value ={query} onChange={(event)=>updateQuery(event.target.value)}
                        />
                    </div>
                    </div>
                    <div className="search-books-results">
                    <ol className="books-grid"></ol>
                </div>
            </div>
            {
                availability ? <ListBooks books = {books} /> : <span>No books available</span>
            }
            
        </div>
        
    )

}
export default SearchBooks;