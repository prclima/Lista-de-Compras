import './App.css';
import Formulario from './components/formulario';
import {ListPage}  from './components/ListPage';
import { Routes, Route } from "react-router-dom";
import {ClientPage} from  "./components/ClientPage";
import EditPage from "./components/EditPage/index";
import {Toaster} from 'react-hot-toast'




function App() {
  return (
    <>


   
    
    <div>
    <div> <Toaster/>
     <Routes>
     
     <Route path="/" element={<Formulario />} />

     <Route path="/listPage" element={<ListPage/>} />

     <Route path="/listPage/:id" element={<ClientPage />} />

    <Route path="/editPage/:id" element={<EditPage />} />
     </Routes>

</div>
     

    </div>

    

    </>
  );
}

export default App;
