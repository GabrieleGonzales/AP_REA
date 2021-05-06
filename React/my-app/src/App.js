import React, { useState } from 'react';
import './App.css';

function App() {
  const [imc, setImc] = useState()
  const [filteredText, setFilteredText] = useState()
  const [peso, setPeso] = useState()
  const [altura, setAltura] = useState()
  const [txtFilter, setTxtFilter] = useState()
  const [selected, setSelected] = useState()

  const changeText = () => {

  }

  const calculateIMC = () => {
    if(peso == 0 || peso == false || altura == 0 || altura == false) return
    let alturaCalculo = altura
    alturaCalculo = altura/100
    let calculoImc = peso / (alturaCalculo * alturaCalculo)
    setImc(calculoImc)
  }

  
  const filterText = () =>{
    let aux = ''
    if(txtFilter == '' || txtFilter == false) return
    if(selected == '' || selected == false) return
    if(selected == 'Consoantes'){
      aux = txtFilter.replace(/[A|E|I|O|U]/ig, "")
    } else {
      aux = txtFilter.replace(/[^A|E|I|O|U]/ig, "")
    }
    setFilteredText(aux)
  }

  return (
    <div className="App">
        <div>
        <div>
          <span><h3>Cálculo de IMC</h3></span>
          <span><h4>Digite apenas numeros inteiros</h4></span>
          <div><span>Peso   : </span><input type="text" value={peso} placeholder="Digite o Peso" onChange={e => setPeso(e.target.value)}/></div>
          <div><span>Altura: </span><input type="text" value={altura} placeholder="Digite a Altura" onChange={e => setAltura(e.target.value)}/></div>
          <button onClick={calculateIMC}>Calcular IMC</button> <br />
          <span><h4>Seu IMC é: { imc }</h4></span><br />
        </div>
        <br /><br />
        ------------------------------------------------------------------------------------------------
        <div><br /><br />
          <span><h3>Filtro de consoantes/vogais</h3></span>
          <span><h4>Digite o Texto</h4></span>
          <div><span>Texto Completo:</span><input type="text" value={txtFilter} placeholder="Digite algum texto" onChange={e => setTxtFilter(e.target.value)}/><br /></div>
          <div><span>Escolha o Modo:</span><select value={selected} onChange={e => setSelected(e.target.value)} style={{ width: 170 + "px" }}> 
            <option disabled value="" >Escolha um item</option>
            <option>Vogais</option>
            <option>Consoantes</option>
          </select></div>
          <button onClick={filterText}>Filtrar Texto</button> <br />
        <span><h4>Texto Filtrado: { filteredText }</h4></span><br />
          
        </div>
      </div>
    </div>
  );
}

export default App;
