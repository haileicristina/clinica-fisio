import { useState } from "react";
import Client from "../core/Client";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps{
    cliente: Client
    clienteMudou?: (cliente: Client) => void
    cancelado?: () => void
}
export default function Formulario(props:FormularioProps){

    const id = props.cliente?.id 
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? '')
    const [email, setEmail] = useState(props.cliente?.email ?? '')
    const [telefone, setTelefone] = useState(props.cliente?.telefone ?? '')

    return(
        <div>
            {id ? (
                 <Entrada
                 somenteLeitura
                 texto ='Código'
                 valor={id}
                 />
            ) : false}
            <Entrada texto ='Nome' valor={nome} valorMudou={setNome}/>
            <Entrada texto ='Idade' valor={idade} valorMudou={setIdade}/>
            <Entrada texto ='Email' tipo='text' valor={email} valorMudou={setEmail}/>
            <Entrada texto ='Telefone' valor={telefone} valorMudou={setTelefone}/>
            <div className="flex justify-between mt-3">
                <Botao
                cor='pink'
                onClick={() => props.clienteMudou?.(new Client(nome,idade, email,telefone, id))}
                >
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado}>Cancelar</Botao>
            </div>     
        </div>
    )
}