import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import background3 from "../img/img4.png";
import style from "./style.module.css";
import Button from "react-bootstrap/Button";
import toast from "react-hot-toast";



export function ListPage() {
  const [list, setList] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false)

  useEffect(() => {
    async function searchList() {
      try {
        const response = await axios.get(
          "https://ironrest.cyclic.app/lista_compras"
        );
        setList(response.data);
        setIsDeleted(false)
      } catch (err) {
        console.log(err);
      }
    }

    searchList();
  }, [isDeleted]);

  async function handleDelete(id) {
    try {
      axios.delete(`https://ironrest.cyclic.app/lista_compras/${id}`);
      setIsDeleted(true)
      toast.success('Lista Deletada')
    } catch (err) {
      console.log(err);
    }
  }



  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background3})`,
          height: "100vh",
          width: "100vw",
        }}
      >
        <h1>Todas as Listas</h1>

        <Link to="/" className="m-2 btn btn-outline-primary">
          Início
        </Link>
        <div className={style.flexbox}>
          {list.map((cE) => {
            return (
              <Card className={style.card}>
                <Card.Body>
                  <Card.Title>{cE.nomeLista}</Card.Title>

                  <Link to={`/listPage/${cE._id}`}>
                  <Button
                  className="m-1"
                  variant="outline-info"
                    >Ver
                    </Button>
                  </Link>

                  <Link to={`/editPage/${cE._id}`}>
                  <Button
                  className="m-1"
                  variant="outline-warning"
                  >Editar
                  </Button>
                  </Link>

                  <Button
                    onClick={() => {
                      handleDelete(cE._id);
                    }}
                    className="m-1"
                    variant="outline-danger"
                  >
                    Apagar Lista
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}
