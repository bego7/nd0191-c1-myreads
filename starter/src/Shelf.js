import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import ListBooks from "./ListBooks";

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
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
          <ListBooks books = {books}/>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <ListBooks books = {books}/>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <ListBooks books = {books}/>
          </div>
        </div>
      </div>
    </div>
    <div className="open-search">
      <Link to="search">Add a book</Link>
    </div>
  </div>
   )
}
export default Shelf;