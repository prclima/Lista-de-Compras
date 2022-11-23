import { useState } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import style from "./style.module.css";
import { Link , useNavigate} from "react-router-dom";
import background from "../img/img1.png";
import toast from "react-hot-toast";


function Formulario() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    nomeLista: "",
    telefone: 0,
    nomeMercado: "",
    produtos: [],
  });

  const [list, setList] = useState(""); 

  function HandleChange(e) {
    if (e.target.name === "nomeMercado") {
      setForm({ ...form, nomeMercado: e.target.selected });
    }

    setForm({ ...form, [e.target.name]: e.target.value });
   
  }

  async function HandleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post("https://ironrest.cyclic.app/lista_compras", form);


      toast.success('Lista Cadastrada!')
      navigate("/listPage")
    } catch (err) {
      console.log(err);
    }
    HandleSubmit();
  }

  return (
    <>
      <div
        className={style.back}
        style={{ backgroundImage: `url(${background})`, height: "100vh" }}
      >
        <div className={style.cabecalho}>
          <h1>Dados da Lista</h1>
        </div>

        <div className={style.formulario}>
          <Form>
            <Form.Group as={Row} className="mb-1" controlId="basic">
              <Form.Label column sm="2">
                {" "}
                Nome da Lista
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  column
                  sm="2"
                  className={style.input}
                  type="text"
                  placeholder="Informe o nome da lista"
                  name="nomeLista"
                  value={form.nomeLista}
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
                  value={form.telefone}
                  onChange={HandleChange}
                />
              </Col>
            </Form.Group>
            <Form.Label> Escolha seu Mercado </Form.Label>
            <Form.Group className="mb-2" controlId="basic">
              <Form.Select
                aria-label="Informe o mercado de preferencia"
                controlId="nomeMercado"
                onChange={HandleChange}
                name="nomeMercado"
              >
                <option selected>Mercados</option>
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

            <Form.Group >
              <Form.Label>Faça sua lista </Form.Label>
              <Button
                  type="button"
                  size="sm"
                  variant="outline-success"
                  style={{marginLeft: '7px', marginBottom: '3px'}}
                    onClick={() => {
                      setForm({ ...form, produtos: [...form.produtos, list] })
                      setList(...form)
                   
                    }}
                  >
                    Adicionar
                  </Button>
                  <Button
                  type="button"
                  variant="outline-danger"
                  size="sm"
                  style={{marginBottom: '3px', marginLeft: '7px'}}
                    onClick={() => {
                    
                      setForm({ ...form, produtos: [...list]});
                    }}
                  >
                 
                    Excluir tudo?
                  </Button>  
                 
              <Col sm="6">
                <Form.Control
                  className={style.input}
                  type="text"
                  placeholder="O que precisamos?"
                  name="produtos"
                   onChange={(e) => {
                    setList(e.target.value);
                  }} 
                  
                />
                
              </Col>
            </Form.Group>
            <div style={{maxWidth:'600px', maxHeight: '580px'}}>
            
                  
            
              {form.produtos.map((item) => (
               <>
                  <textarea
                    style={{
                      width: "105px",
                      height: "30px",
                      marginRight: "10px",
                    }}
                  >
                    {item}
                  </textarea>
                 
                  </>
                  ))}
                  <Link to="/listPage">
              <Button className={style.pgCadastro} variant="warning" size="sm" style={{width: '120px', margin: '15px'}}>Todas as Listas</Button>
            </Link>
            <Button
              className={style.bntCadastro}
              variant="primary"
              type="submit"
              size="sm"
              style={{width: '80px', marginRigth: '5px'}}
              onClick={HandleSubmit}
            >
              Enviar
            </Button>
            </div>
          
           
          </Form>
        </div>
      </div>
    </>
  );
}
export default Formulario;

