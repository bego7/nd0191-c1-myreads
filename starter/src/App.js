import "./App.css";
import { useState } from "react";
import Shelf from "./Shelf";
import {Route, Routes, useNavigate} from "react-router-dom";
import SearchBooks from "./SearchBooks";

const App = () => {
  return (
    <Routes>
      <Route  
        exact path="/" element={ <Shelf /> } />
      <Route  
        exact path="search" element={ <SearchBooks /> } />
    </Routes>
  )
};

export default App;
