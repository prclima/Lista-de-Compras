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
            
            <Card style={{ width: "18rem" }} className="m-2" >
            <Card.Body>
              <Card.Title>{cE.nomeLista}</Card.Title>
              
           
              {/* <Link to={`/list/${cE._id}`} > */}
                <Card.Link className="m-2">Ver</Card.Link>
              {/* </Link> */}

              {/* <Link to={`/edit/${cE._id}`} > */}
                <Card.Link className="m-2">Editar</Card.Link>
              {/* </Link> */}

              <button className="m-2">
                Deletar Lista
              </button>
            </Card.Body>
          </Card>


        )
        
        })}

    </>


)


}