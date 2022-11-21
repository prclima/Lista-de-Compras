import { useState } from "react";
import axios from "axios";

function Formulario() {
  const [form, setForm] = useState({
    nomeLista: "",
    telefone: 0,
    nomeMercado: "",
    produtos: {},
  });

  function HandleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function HandleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
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
    <form>
      <label htmlFor="nomeLista"> Nome da Lista:</label>
      <input
        type="text"
        placeholder="Informe o nome da lista"
        value={form.nomeLista}
        name="nomeLista"
        onChange={HandleChange}
      />

      <label htmlFor="telefone"> Telefone</label>
      <input
        placeholder="Informe o telefone para contato"
        value={form.telefone}
        name="telefone"
        onChange={HandleChange}
      />

      <label htmlFor="nomeMercado"> Nome do Mercado</label>
      <input
        type="text"
        placeholder="Informe o mercado de preferencia"
        value={form.nomeMercado}
        name="nomeMercado"
        onChange={HandleChange}
      />

      <label htmlFor="produtos"> Produtos</label>
    <input type="text" placeholder="Faça sua lista"  name="produtos" onChange={HandleChange}/>

      <button onClick={HandleSubmit}>Enviar</button>
    </form>
  );
}
export default Formulario;
