import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [nro1, setNro1] = useState(0);
  const [nro2, setNro2] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [operacao, setOperacao] = useState('Somar');

  const calcular = () => {
    if (operacao == "Somar")
      return parseFloat(nro1) + parseFloat(nro2);
    else if (operacao == "Subtrair")
      return parseFloat(nro1) - parseFloat(nro2);
    else if (operacao == "Dividir")
      return parseFloat(nro1) / parseFloat(nro2);
    else
      return parseFloat(nro1) * parseFloat(nro2);
  }

  useEffect(() => {
    setResultado(calcular());
  }, [nro1, nro2, operacao]);

  return (
    <div className="App">
      <h1>Calculadora com React</h1>
      <label>Primeiro Nº</label>
      <input
        type="number"
        value={nro1}
        onChange={(e) => setNro1(e.target.value)} />

      <label>Segundo Nº</label>
      <input
        type="number"
        value={nro2}
        onChange={(e) => setNro2(e.target.value)} />

      <select onChange={(e) => setOperacao(e.target.value)}>
        <option >Somar</option>
        <option>Subtrair</option>
        <option>Dividir</option>
        <option>Multiplicar</option>
      </select>


      <label>Resultado {resultado}</label>
    </div>
  );
}

export default App;