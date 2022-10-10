import React, { useState, useRef, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseRef = (props) => {
  const [valor1, alterarValor1] = useState("");
  const contador = useRef(0); //retorna um objeto e sempre vai retonar a mesma ref

  // passagem por referencia é quando o valor de um objeto para uma variavel
  // e atribui o valor dessa variavel para outra variavel

  useEffect(
    function () {
      contador.current = contador.current + 1;
    },
    [valor1]
  );

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />
      <SectionTitle title="Exercio #01" />
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{valor1} [</span>
          <span className="text red">{contador.current}</span>
          <span className="text">]</span>
        </div>
        <input
          type="text"
          className="input"
          value={valor1}
          onChange={(evento) => alterarValor1(evento.target.value)}
        />
          </div>
          
          <SectionTitle title="Exercio #02" />
    </div>
  );
};

export default UseRef;
