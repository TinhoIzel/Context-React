
// Desafio de escolher tema
// e idioma, usando contexto!
// e guardar (não sei se era requisito)

import { createContext, useState } from "react"

// contexto com dados
export const Configs = createContext({ tema: "light", mudarTema: () => {}, idioma: "pt", mudarIdioma: () => {}})

// componente provedor
export const EscolherTemaIdioma = (props) => {

    // dados
    const [ tema, setTema ] = useState('light')
    const [ idioma, setIdioma ] = useState('pt')

    // mudar tema e local storage
    const mudarTema = () => {
        if (tema === 'light') {
            setTema('dark')
            localStorage.setItem("tema", 'dark')    
        } else {
            setTema('light')
            localStorage.setItem("tema", 'light')
        } 
        
    }

    // mudar idioma e local storage
    const mudarIdioma = () => {
        if (idioma === 'pt') {
            setIdioma('en')
            localStorage.setItem("idioma", 'en')    
        } else {
            setIdioma('pt')
            localStorage.setItem("idioma", 'pt')
        } 
        
    }
    
    return (
        <Configs.Provider value={{ tema: tema, mudarTema: mudarTema, 
                                idioma: idioma, mudarIdioma: mudarIdioma}}>
            {props.children}
        </Configs.Provider>
    )
}