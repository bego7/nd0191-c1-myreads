import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BookShelf from "./BookShelf";

const Shelf = () =>{

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
    <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <BookShelf title={"Currently Reading"} books={books.filter((book)=>book.shelf==="currentlyReading")} shelf ={"currentlyReading"} />

        <BookShelf title={"Want to Read"} books={books.filter((book)=>book.shelf==="wantToRead")}  shelf={"wantToRead"} />
        
        <BookShelf title={"Read"} books={books.filter((book)=>book.shelf==="read")}  shelf={"read"}/>
      </div>
    </div>
    <div className="open-search">
      <Link to="search">Add a book</Link>
    </div>
  </div>
   )
}
export default Shelf;