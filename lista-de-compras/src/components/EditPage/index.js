import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import style from "./style.module.css";
import { Link , useNavigate} from "react-router-dom";
import background5 from "../img/img5.png";
import toast from "react-hot-toast";

function EditPage() {
  const params = useParams();
  const navigate = useNavigate()

  const [editForm, setEditForm] = useState({
    nomeLista: "",
    telefone: 0,
    nomeMercado: "",
    produtos: [],
  });

  useEffect(() => {
    async function EditData() {
      try {
        const response = await axios.get(
          `https://ironrest.cyclic.app/lista_compras/${params.id}`
        );
        setEditForm(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    EditData();
  }, []);

  function HandleChange(e) {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  }

  async function HandleSubmit(e) {
    e.preventDefault();

    try {
      const infoSemId = { ...editForm };
      delete editForm._id;
      const response = await axios.put(
        `https://ironrest.cyclic.app/lista_compras/${params.id}`,
        infoSemId
      );
      toast.success('Lista Alterada!')
      navigate("/listPage")
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
       <div className={style.back} style={{ backgroundImage: `url(${background5})` , height: '100vh'}}>
        <div className={style.cabecalho}>
          <h1>Editar Lista</h1>
        </div>

        <div className={style.formulario}>
          <Form onSubmit={HandleSubmit}>
            <Form.Group as={Row} className="mb-1" controlId="basic">
              <Form.Label column sm="2">
                {" "}
                Nome da Lista
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  disabled
                  column
                  sm="2"
                  className={style.input}
                  type="text"
                  placeholder="Informe o nome da lista"
                  name="nomeLista"
                  value={editForm.nomeLista}
                  onChange={HandleChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-1" controlId="basic">
              <Form.Label column sm="2">
                {" "}
                Telefone{" "}
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  className={style.input}
                  type="number"
                  placeholder="Informe o telefone para contato"
                  name="telefone"
                  value={editForm.telefone}
                  onChange={HandleChange}
                />
              </Col>
            </Form.Group>
            <Form.Label> Escolha seu Mercado </Form.Label>
            <Form.Group className="mb-2" controlId="basic">
              <Form.Select
                aria-label="Informe o mercado de preferencia"
                controlId="nomeMercado"
                value={editForm.nomeMercado}
                onChange={HandleChange}
                name="nomeMercado"
              >
                <option selected>{editForm.nomeMercado}</option>
                <option value="Pão de Açucar">Pão de Açucar</option>
                <option value="Extra">Extra</option>
                <option value="Mambo">Mambo</option>
                <option value="Natural da Terra">Natural da Terra</option>
                <option value="Mercadao">Mercadão</option>
                <option value="Mercado da Liberdade">
                  Mercado da Liberdade
                </option>
                <option value="Eataly">Eataly</option>
                <option value="Hirota">Hirota</option>
                <option value="Assai">Assai</option>
                <option value="Atacadão">Atacadão</option>
                <option value="Makro">Makro</option>
                <option value="Maxxi Atacados">Maxxi Atacados</option>
                <option value="Tenda Atacados">Tenda Atacados</option>
                <option value="Sams Club">Sams Club</option>
                <option value="Spani Atacados">Spani Atacados</option>
                <option value="Carrefour">Carrefour</option>
                <option value="Dia">Dia</option>
                <option value="Walmart">Walmart</option>
                <option value="Outro">Outro</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="basic">
              <Form.Label>Faça sua lista </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                className={style.input}
                type="text"
                value={editForm.produtos}
                placeholder="Anotou tudo?"
                name="produtos"
                onChange={HandleChange}
              />
            </Form.Group>
            <div>
            <Link to="/listPage" >
            <Button  className={style.pgCadastro}
            variant="warning">
            
              Página de pedidos
            
             </Button>
             </Link>
          
            <Button
              className={style.bntCadastro}
              
              variant ="success"
              type="submit"
              onClick={HandleSubmit}
            >
              Alterar
            </Button>
          
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default EditPage;
