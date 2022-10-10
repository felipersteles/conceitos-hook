import React, { useState, useRef, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const merge = (string1, string2) => {
  return [...string1]
    .map((elemento, indice) => `${elemento}${string2[indice] || ""}`)
    .join("");
};

const UseRef = (props) => {
  const [valor1, alterarValor1] = useState("");
  const [valor2, alterarValor2] = useState("");

  const contador = useRef(0); //retorna um objeto e sempre vai retonar a mesma ref
  const input1 = useRef(null);
  const input2 = useRef(null);

  // passagem por referencia é quando o valor de um objeto para uma variavel
  // e atribui o valor dessa variavel para outra variavel

  useEffect(
    function () {
      contador.current = contador.current + 1;
      input2.current.focus();
    },
    [valor1]
  );

  useEffect(
    function () {
      contador.current = contador.current + 1;
      input1.current.focus();
    },
    [valor2]
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
          <span className="text">{merge(valor1, valor2)} [</span>
          <span className="text red">{contador.current}</span>
          <span className="text">]</span>
        </div>
        <input
          type="text"
          className="input"
          ref={input1}
          value={valor1}
          onChange={(evento) => alterarValor1(evento.target.value)}
        />
      </div>

      <SectionTitle title="Exercio #02" />
      <div className="center">
        <input
          type="text"
          className="input"
          ref={input2}
          value={valor2}
          onChange={(evento) => alterarValor2(evento.target.value)}
        />
      </div>
    </div>
  );
};

export default UseRef;
