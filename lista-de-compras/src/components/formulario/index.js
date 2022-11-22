import { useState } from "react";
import axios from "axios";
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function Formulario() {
  const [form, setForm] = useState({
    nomeLista: "",
    telefone: 0,
    nomeMercado: "",
    produtos: [],
  });

  function HandleChange(e) {
      if (e.target.name === "nomeMercado"){
        setForm({ ...form, nomeMercado : e.target.selected})
      }

    setForm({ ...form, [e.target.name]: e.target.value })
    console.log(e.target);
  }

  async function HandleSubmit(e) {
    e.preventDefault();

    try {
       await axios.post(
        "https://ironrest.cyclic.app/lista_compras",
        form
      );

      console.log(setForm);
    } catch (err) {
      console.log(err);
    }
    HandleSubmit();
  }

  return (
    <>
   
    <h1> Dados da Lista</h1>
    <Form>
    <Row className="col-md-9">
    <Stack direction="horizontal" gap={3}>
      <Col>
       
        <FloatingLabel  controlId="nomeLista" label="Informe o nome da lista" >
          <Form.Control type="text"   name="nomeLista" value={form.nomeLista} onChange={HandleChange}/>
        </FloatingLabel>
      </Col>
      <Col >
        <FloatingLabel controlId="telefone" label="Informe o telefone para contato" >
          <Form.Control type="number" name="telefone" value={form.telefone} onChange={HandleChange}/>
        </FloatingLabel>
      </Col>
      <Col >
        <Form.Select aria-label="Informe o mercado de preferencia" controlId="nomeMercado" onChange={HandleChange} name="nomeMercado"  >
      <option selected >Mercados</option>
      <option value="Pão de Açucar">Pão de Açucar</option>
      <option value="Extra">Extra</option>
      <option value="Mambo">Mambo</option>
      <option value="Natural da Terra">Natural da Terra</option>
      <option value="Mercadao">Mercadão</option>
      <option value="Mercado da Liberdade">Mercado da Liberdade</option>
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
      </Col>
      <Col md>
        <FloatingLabel controlId="produtos" label="Faça sua lista" >
          <Form.Control type="text" name="produtos" onChange={HandleChange}/>
        </FloatingLabel>
      </Col>
      <Button variant="primary" type="submit" onClick={HandleSubmit}>Enviar</Button>
      </Stack>
    </Row>
</Form>
</>
  )
}
export default Formulario;