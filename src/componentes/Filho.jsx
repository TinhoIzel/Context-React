import { useContext } from "react";
import { Context } from "./Pai";

// componente filho
function Receptor() {

    // chama o context do createContext()
    const context = useContext(Context)

    return <h2>Eu sou o filho, que recebe {context.valor} do pai</h2>
}

export default Receptor