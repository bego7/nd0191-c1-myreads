import { useState, useEffect } from "react";
const ListBooks = ({ books, shelf }) => {
    const [status, setStatus] = useState('none');
    const changeStatus = (id) => {
        console.log(id);
    }
    return (
        <ol className="books-grid">
            {
                books.filter((book)=>book.imageLinks)
                    .map((book) => (
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div
                                            className="book-cover"
                                            style={{
                                                width: 128,
                                                height: 193,
                                                backgroundImage:`url("${book.imageLinks.smallThumbnail}")`
                                            }}
                                        ></div>
                                        <div className="book-shelf-changer">
                                            <select  defaultValue = {book.shelf ? book.shelf : "none"}>
                                                <option disabled>
                                                    Move to...
                                                </option>
                                                <option value="currentlyReading">
                                                    Currently Reading
                                                </option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    {
                                        book.authors ? 
                                        <div className="book-authors">
                                            {   
                                                
                                                book.authors
                                            }
                                        </div> : <span>No authors available</span>
                                    }
                                    
                                </div>
                            </li>
                    )
                )
                
                
            }


        </ol>
    )
}
export default ListBooks;