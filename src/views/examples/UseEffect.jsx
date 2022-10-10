import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFatorial(n) {
  if (n < 0) return -1;
  if (n === 0) return 1;

  return n * calcFatorial(n - 1);
}

function ehPar(numero) {
  if (numero % 2 === 0) return true;
  else return false;
}

// Efeito colateral: modificar algo dentro da interface alterando outro tipo de informação que pertence ao componente
const UseEffect = (props) => {
  const [numero, alterarNumero] = useState(1);
  const [fatorial, alterarFatorial] = useState(1);
  const [par, alterarPar] = useState(false);

  // alterarFatorial(calcFatorial(numero))
  // a linha de codigo acima gera um loop infinito pois ele vai fazer o calculo o tempo todo
  // o certo é calcular somente quando o valor for alterado

  //rece dois paramentros sendo um deles o efeito e o segundo a dependencia
  useEffect(
    function () {
      alterarFatorial(calcFatorial(numero));
    },
    [numero]
  ); //quando esse valor for modificado a função é chamada

  useEffect(() => {
    alterarPar(ehPar(numero));
  }, [numero]);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercio #01" />

      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">
            {fatorial === -1 ? "Não existe" : fatorial}
          </span>
        </div>
        <input
          type="number"
          className="input"
          value={numero}
          onChange={(evento) => alterarNumero(evento.target.value)}
        />
      </div>

      <SectionTitle title="Exercio #02" />
      <div className="center">
        <div>
          <span className="text">É par? </span>
          <span className="text red">{par === true ? "sim" : "não"}</span>
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
