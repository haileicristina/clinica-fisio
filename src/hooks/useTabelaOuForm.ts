import { useState } from "react";

export default function useTabelaOuForm(){
    const [visivel, setVisivel] = useState<'tabela' | 'formulario'>('tabela')

    const exibirformulario = () => setVisivel('formulario')
    const exibirTabela = () => setVisivel('tabela')
    return{
        formularioVisivel: visivel === 'formulario',
        tabelaVisivel: visivel == 'tabela',
        exibirTabela,
        exibirformulario
    }
}