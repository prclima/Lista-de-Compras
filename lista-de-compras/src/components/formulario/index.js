import { useState } from "react";
import axios from "axios";
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import style from './style.module.css'

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
   
   <div className={style.cabecalho}>
        <h1>Dados da Lista</h1>
      </div>

      <div className={style.formulario}>
    <Form >
    <Form.Group as={Row} className="mb-1" controlId="basic">
        <Form.Label column sm="2"> Nome da Lista</Form.Label>
        <Col sm="10">
          <Form.Control column sm="2" className={style.input} type="text"   placeholder="Informe o nome da lista" name="nomeLista" value={form.nomeLista} onChange={HandleChange}/>
          </Col>
          </Form.Group>    
      
          <Form.Group as={Row} className="mb-1" controlId="basic">
        <Form.Label column sm="2"> Telefone </Form.Label>
        <Col sm="10">
          <Form.Control className={style.input} type="number" placeholder="Informe o telefone para contato" name="telefone" value={form.telefone} onChange={HandleChange}/>
          </Col>
          </Form.Group>
          <Form.Label> Escolha seu Mercado </Form.Label>
          <Form.Group className="mb-2" controlId="basic">
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
    </Form.Group>

     <Form.Group className="mb-3" controlId="basic">
        <Form.Label>Faça sua lista </Form.Label>
          <Form.Control as="textarea" rows={3} className={style.input} type="text" placeholder="Anotou tudo?" name="produtos" onChange={HandleChange}/>
          </Form.Group>
     
      <Button className={style.bntCadastro} variant="primary" type="submit" onClick={HandleSubmit}>Enviar</Button>
      
    
</Form>
</div>
</>
  )
}
export default Formulario;