import './App.css';
import Formulario from './components/formulario';
import {ListPage}  from './components/ListPage';
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div>
     
     <Routes>
     
     <Route path="/" element={<Formulario />} />

     <Route path="listPage" element={<ListPage/>} />

     
     </Routes>
    </div>
  );
}

export default App;
