import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import style from "./style.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function ClientPage() {
  const params = useParams();

  const [list1, setList1] = useState({});

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
      <Card className={style.infoProduto} style={{width: "400px"}}>
        <Card.Body>
          <Card.Title className="text-center">
            Lista: {list1.nomeLista}
          </Card.Title>
          <Card.Text>
            <p>
              <strong>Telefone: </strong>
              {list1.telefone}
            </p>
            <p>
              <strong> Nome do Mercado: </strong> {list1.nomeMercado}
            </p>

            <p>
              <strong>O que precisava?</strong> {list1.produtos}
            </p>
          </Card.Text>
          <Link to="/listPage">
          <Button variant="outline-primary" className={style.btnVoltar}>Voltar</Button>
          
         </Link>
        </Card.Body>
      </Card>
    </>
  );
}



    