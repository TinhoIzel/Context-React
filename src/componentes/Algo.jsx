import { useContext, useEffect, useState } from "react"
import { Configs } from "./TemaIdioma"

const AlgoAqui = () => {

    const configs = useContext(Configs)
    // textos do json, não sei se tinha outra forma pra fazer
    const [ textos, setTextos ] = useState({})

    // recuperar os dados do localStorage, caso existam
    const recuperarConfigs = () => {
        const idioma = localStorage.getItem("idioma")
        const tema = localStorage.getItem("tema")

        if (!tema) {
            localStorage.setItem("tema", configs.tema)
        } else {
            if (tema !== configs.tema) configs.mudarTema()
        }

        if (!idioma) {
            localStorage.setItem("idioma", configs.idioma)
        } else {
            if (idioma !== configs.idioma) configs.mudarIdioma()
        }
    }

    // recupera os dados do localStorage
    // quando o componente é montado
    useEffect(() => {

        recuperarConfigs()

    },[])

    // pegar o textos.json pra passar pro componente
    const mudarTextos = async () => {
        const resposta = await fetch(`textos.json`)
        const dadosTexto = await resposta.json()
        setTextos(dadosTexto[configs.idioma])
    }

    // mudar os textos quanto o idioma mudar
    useEffect(() => {

        mudarTextos() 

    },[configs.idioma])

    return (
        <div style={{background: configs.tema === 'light' ? 'white' : 'black',
                     color: configs.tema === 'light' ? 'black' : 'white'}}>
            <h2>
                { textos.titulo }
            </h2>
            <p>
                { textos.textinho }
            </p>
            
            <h3> { textos.tema } {configs.tema} <button onClick={configs.mudarTema}>{ textos.botaoTema }</button></h3>
            <h3> { textos.idioma } {configs.idioma} <button onClick={configs.mudarIdioma}>{ textos.botaoIdioma }</button></h3>
        </div>

    )
    
}

export default AlgoAqui