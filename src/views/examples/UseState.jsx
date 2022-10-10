import React, { useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

//criar estados dentro de um componente funcional
const UseState = (props) => {
  const [estado, alterarEstado] = useState(0); //passando o parametro inicial
  const [nome, alterarNome] = useState(''); // por default uma string vazia

  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />
      <SectionTitle title="Exercio #01" />
      <div className="center">
        <span className="text">{estado}</span>
        <div>
          <button
            className="btn"
            onClick={() => alterarEstado((valorATual) => valorATual - 1000)}
          >
            -1000
          </button>
          <button className="btn" onClick={() => alterarEstado(estado - 1)}>
            -1
          </button>
          <button className="btn" onClick={() => alterarEstado(estado + 1)}>
            +1
          </button>
          <button className="btn" onClick={() => alterarEstado(1000)}>
            1000
          </button>
          <button
            className="btn"
            onClick={() => alterarEstado((valorATual) => valorATual + 1000)}
          >
            +1000
          </button>
        </div>
      </div>
      <SectionTitle title="Exercio #02" />
          <input type="text" className="input" value={nome} onChange={evento => alterarNome(evento.target.value)} />
          <span className="">Estado nome: { nome}</span>
    </div>
  );
};

export default UseState;
