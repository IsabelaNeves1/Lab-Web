import { useState } from "react";
function Challenge() {
  const valor1 = 30;
  const valor2 = 20;
  const [resultado, setResultado] = useState(null);

  const somarValores = () => {
    setResultado( valor1 + valor2);
  };

  return (
    <div>
      <h2>Desafio 2</h2>
      <p>Valor 1: {valor1}</p>
      <p>Valor 2: {valor2}</p>
      <button onClick={somarValores}>Somar valores</button>
      {resultado !== null && <p>Resultado: {resultado}</p>}
    </div>
  );
}

export default Challenge;
