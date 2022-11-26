import ListBooks from "./ListBooks";
const BookShelf = ({title,books, shelf})=>{

    return(
        <div className="bookshelf">
          <h2 className="bookshelf-title">{title}</h2>
          <div className="bookshelf-books">
          <ListBooks books = {books} shelf = {shelf}/>
          </div>
        </div>
    )
}

export default BookShelf;