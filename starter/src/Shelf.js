import {Link} from "react-router-dom";
import BookShelf from "./BookShelf";

const Shelf = ({books, onMoveBook}) =>{
   return (
    <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <BookShelf title={"Currently Reading"} books={books.filter((book)=>book.shelf==="currentlyReading")} onMoveBook={onMoveBook} />

        <BookShelf title={"Want to Read"} books={books.filter((book)=>book.shelf==="wantToRead")} onMoveBook={onMoveBook}/>

        <BookShelf title={"Read"} books={books.filter((book)=>book.shelf==="read")}  onMoveBook={onMoveBook}/>
      </div>
    </div>
    <div className="open-search">
      <Link to="search">Add a book</Link>
    </div>
  </div>
   )
}
export default Shelf;