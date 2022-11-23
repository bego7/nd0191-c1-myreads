import "./App.css";
import { useState } from "react";
import ListBooks from "./ListBooks";
import Shelf from "./Shelf";
import {Route, Routes, useNavigate} from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route  
        exact path="/" element={ <Shelf /> } />
      <Route  
        exact path="list" element={ <ListBooks /> } />
    </Routes>
  )
};

export default App;
