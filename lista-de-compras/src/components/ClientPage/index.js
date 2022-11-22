import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function ClientPage() {
    const params= useParams();

    const [list1,setList1] = useState({})

    useEffect(() => {
        async function searchList() {
          try {
            const response = await axios.get(
              `https://ironrest.cyclic.app/lista_compras/${params.id}`
            );
            setList1(response.data);
          } catch (err) {
            console.log(err);
          }
        }
        searchList();
      }, []);

      return (

        <>
            <h1>{list1.nomeLista}</h1>
            <p>{list1.telefone}</p>
            <p>{list1.nomeMercado}</p>
            <p>{list1.produtos}</p>
     
     
      <Link to="/listPage" className="btn btn-outline-primary">
        Voltar
      </Link>



        </>

      )



}