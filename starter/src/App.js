import "./App.css";
import { useState, useEffect } from "react";
import Shelf from "./Shelf";
import { Route, Routes } from "react-router-dom";
import SearchBooks from "./SearchBooks";
import * as BooksAPI from "./BooksAPI";


const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    }
    getBooks();

  }, []);

  const moveBook = async (book, status) => {
    await BooksAPI.update(book, status);
    const res = await BooksAPI.getAll();
    setBooks(res);
  }

  return (
    <Routes>
      <Route
        exact path="/" element={<Shelf onMoveBook={(book, status) => {
          moveBook(book, status)
        }} books={books} />} />
      <Route
        exact path="search" element={<SearchBooks onMoveBook={(book, status) => {
          moveBook(book, status)
        }} shelfBooks={books} />} />
    </Routes>
  )
};

export default App;
