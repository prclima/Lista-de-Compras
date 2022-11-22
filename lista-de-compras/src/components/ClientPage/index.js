import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from './style.module.css'

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
        <div className={style.infoProduto}> 
            <h1>Nome da Lista: {list1.nomeLista}</h1>
            <p><strong> Telefone:</strong> {list1.telefone}</p>
            <p><strong>Nome do Mercado:</strong> {list1.nomeMercado}</p>
            <p><strong>Lista de Produtos:</strong> {list1.produtos}</p>
        </div>

        <div  className={style.bntVoltar}>
      <Link to="/listPage" className="btn btn-outline-primary">
        Voltar
      </Link>
      </div>


        </>

      )



}