import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import background3 from "../img/img4.png"
import style from "./style.module.css"

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

        async function handleDelete(id) {
          try{
            axios.delete(`https://ironrest.cyclic.app/lista_compras/${id}`)
          } catch(err){
            console.log(err);
          }

      }



return (
    <>
      <div style={{ backgroundImage: `url(${background3})` , height: '100vh', width: '100vw'}}>
        <h1>Lista de compras!</h1>

        <Link to="/" className="m-2 btn btn-outline-primary">
          Início
        </Link>
        <div clssName={style.flexbox}>
        {list.map((cE) => {
          return (
            <Card style={{ width: "18rem" }}  className={style.card}>
              <Card.Body>
                <Card.Title>{cE.nomeLista}</Card.Title>

                <Link to={`/listPage/${cE._id}`}>
                  <Card.Link className="m-2">Ver</Card.Link>
                </Link>

                {/* <Link to={`/edit/${cE._id}`} > */}
                <Card.Link className="m-2">Editar</Card.Link>
                {/* </Link> */}

                <button onClick={()=>{
                handleDelete(cE._id)
              }} className="m-2">Apagar Lista</button>
              </Card.Body>
            </Card>
          );
        })}
        </div>
        </div>
    </>
  );
}
