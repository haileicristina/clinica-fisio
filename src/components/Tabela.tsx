import Client from "../core/Client"
import { IconeEdicao, IconeLixo } from "./Icones"

interface TabelaProps{
    clientes: Client[]
    clienteSelecionado?:(cliente:Client) => void
    clienteExcluido?:(cliente:Client) => void
}

export default function Tabela(props: TabelaProps){

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

   function renderizarCabecalho(){
        return(
            <tr>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                <th className="text-left p-4">Email</th>
                <th className="text-left p-4">Telefone</th>
                <th className="text-left p-4">Código</th>
                {exibirAcoes ? <th className="p-4">Ações</th> : false}
            </tr>
        )
    }

    function renderizarDados(){
        return props.clientes?.map((cliente, index)=>{
            return(
                <tr
                key={cliente.id}
                className={`${index % 2 === 0 ? 'bg-gray-800 hover:bg-purple-800': 'border border-purple-500 hover:bg-purple-500'}`}
                >
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    <td className="text-left p-4">{cliente.email}</td>
                    <td className="text-left p-4">{cliente.telefone}</td>
                    <td className="text-left p-4">{cliente.id}</td>
                    {exibirAcoes ? renderizarAcoes(cliente) : false}
                </tr>
            )
        })     
       
    }

    function renderizarAcoes(cliente: Client){
        return(
            <td className="flex justify-center">
                {props.clienteSelecionado ? (
                    <button onClick={() => props.clienteSelecionado?.(cliente)} className={`
                    flex justify-center items-center
                    text-pink-600 rounded-full
                    hover:bg-purple-500 hover:text-purple-50 p-2 m-1
                `}>
                    {IconeEdicao}
                    </button>
                ) : false}
                {props.clienteExcluido ? (
                     <button onClick={() => props.clienteExcluido?.(cliente)} className={`
                     flex justify-center items-center
                     text-red-300 rounded-full
                     hover:bg-red-500 hover:text-purple-50 p-2 m-1
                 `}>{IconeLixo}</button>
                ) : false}
               
            </td>
        )
    }

    return(
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100 bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}