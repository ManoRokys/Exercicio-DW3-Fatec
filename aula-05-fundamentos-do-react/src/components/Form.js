import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log(name,email)
  }
  return (
    <>
      <h1>Formulários de cadastro:</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)} />
        <br />
        <input type="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} />
        <br /> <br />
        <button type="submit">Cadastrar</button>
        <br /> <br />
        {name}<br />
        {email}
      </form>
    </>
  );
};

export default Form;
