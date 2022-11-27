import {useEffect, useState} from "react";
import * as BooksAPI from "./BooksAPI";
import {Link} from "react-router-dom";
import ListBooks from "./ListBooks";

const SearchBooks = ({onMoveBook, shelfBooks})=> {

        
            const getBooks = async ()=>{

            const res = await BooksAPI.getAll();
            
            }
            
            
            

            
        
        

        const [query, setQuery] = useState('');
        const [books, setBooks] = useState([]);
        //const [shelfBooks, setShelfBooks] = useState([]);
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
                    
                    // res.map((book)=>{
                    //     book.id === 
                    // })

                    
                    //getBooks();
                    
                    console.log(shelfBooks);
                        const newArray =[];
                        for(let i = 0; i < res.length;i++){
                            for(let j = 0; j < shelfBooks.length;j++){
                            
                                if(res[i].id === shelfBooks[j].id){
                                    newArray[i] = shelfBooks[j];
                                    console.log("The shelf value is",shelfBooks[j]);
                                    break;
                                    //onMoveBook(res[i], shelfBooks[j].shelf);
                                }
                                else{
                                    console.log("Entro al else");
                                    //newArray[i] ='o';
                                    newArray[i] = res[i];
                                }
                            }
                         }
                        //console.log("The books after changing are", res);
                    //  const newRes = res.map((book=>(
                            
                    //  )))
                    
                    

                    // const newValues = res.map((book)=>
                    //                 shelfBooks.filter((shelfBook)=>
                    //                     book.id === shelfBook.id ? shelfBook : book
                    //                 ))
                    console.log("Ne valies ", newArray);
                    setBooks(newArray);
                    getBooks();
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
                availability ? <ListBooks books = {books} onMoveBook = {onMoveBook}/> : <span>No books available</span>
            }
            
        </div>
        
    )

}
export default SearchBooks;