import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Card from "react-bootstrap/Card";


export function ListPage() {
    const [list, setList] = useState([]);


    useEffect(() => {
        async function searchList() {
          try {
            const response = await axios.get(
              "https://ironrest.cyclic.app/lista_compras"
            );
            setList(response.data);
          } catch (err) {
            console.log(err);
          }
        }
    
        searchList();
      }, []);



return(
    <>
        <h1>Lista de compras!</h1>

        {list.map((cE) =>{
        return (
            
            <Card style={{ width: "18rem" }} >
            <Card.Body>
              <Card.Title>{cE.name}</Card.Title>
              
              <Link to={`/list/${cE._id}`} >
                <Card.Link>Ver</Card.Link>
              </Link>

              <Link to={`/edit/${cE._id}`} >
                <Card.Link>Editar</Card.Link>
              </Link>

              <button>
                Deletar Lista
              </button>
            </Card.Body>
          </Card>


        )
        
        })}

    </>


)


}