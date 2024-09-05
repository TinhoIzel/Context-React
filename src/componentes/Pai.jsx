import { createContext } from "react";

// contexto que vai pro filho
// é possivel colocar um valor dentro, um valor padrao
export const Context = createContext()

// componente que vai envolver componentes filhos
export const Provedor = (algo) =>{

    return(
        // é uma espécie de componente que usa de um contexto,
        // e nesse contexto é o provedor dos props
        
        // value tem que ser value
        // dentro pode ser qualquer coisa
        <Context.Provider value={{valor:"Algo"}}>

            {/* algo tem que ser igual o parametro
                mas o children tem que ser children */}
            {algo.children}
        
        </Context.Provider>
    )
}
