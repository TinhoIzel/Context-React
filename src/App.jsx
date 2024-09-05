// import { Provedor } from "./componentes/Pai"
// import Receptor from "./componentes/Filho"

import { createContext } from "react"
import { EscolherTemaIdioma } from "./componentes/TemaIdioma"
import AlgoAqui from "./componentes/Algo"

function App() {
  return (
    <>
      {/* <Provedor>
          <Receptor/>
      </Provedor> */}
      <EscolherTemaIdioma>
          <AlgoAqui/>
      </EscolherTemaIdioma>
    </>
  )
}

export default App
