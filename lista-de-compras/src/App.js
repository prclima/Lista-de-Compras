import './App.css';
import Formulario from './components/formulario';
import {ListPage}  from './components/ListPage';
import { Routes, Route } from "react-router-dom";
import {ClientPage} from  "./components/ClientPage"



function App() {
  return (
    <div>
     
     <Routes>
     
     <Route path="/" element={<Formulario />} />

     <Route path="/listPage" element={<ListPage/>} />

     <Route path="/listPage/:id" element={<ClientPage />} />

     </Routes>
    </div>
  );
}

export default App;
