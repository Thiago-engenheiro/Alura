import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const AdicionarColaborador = (colaborador) => {

    console.log (colaborador)
    setColaboradores([...colaboradores, colaborador])

  }

  return (

    <div className="App">
      
      <Banner/>
      <Formulario aoColaoradorCadastrado = {colaborador => AdicionarColaborador(colaborador)}/>

    </div>

  );

}

export default App;
