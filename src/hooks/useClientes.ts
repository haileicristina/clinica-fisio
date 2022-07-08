import Client from "../core/Client";
import { useEffect, useState } from "react";
import ClienteRepositorio from "../core/ClienteRepositorio";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import useTabelaOuForm from "./useTabelaOuForm";

export default function useClientes(){
    const repo: ClienteRepositorio = new ColecaoCliente()
    const[clientes, setClientes] = useState<Client[]>([])
  
    const[cliente, setCliente] = useState<Client>(Client.vazio())
  
  const {    
    tabelaVisivel,
    exibirTabela,
    exibirformulario,
  } = useTabelaOuForm()
  
    useEffect(obterTodos,[])
    
    function obterTodos(){
      repo.obterTodos().then(clientes => {
        setClientes(clientes)
       exibirTabela()
      })
    }
    function selecionarCliente(cliente:Client){
      setCliente(cliente)
      exibirformulario()
    }
    async function excluirCliente(cliente:Client){
      await repo.excluir(cliente)
      obterTodos()
    }
  
    function novocliente(){
      setCliente(Client.vazio())
      exibirformulario()
    }
  
    async function salvarCliente( cliente: Client){
      await repo.salvar(cliente)
      obterTodos()
      console.log(cliente)
    }
    return{
        tabelaVisivel,
        cliente,
        clientes,
        obterTodos,
        selecionarCliente,
        excluirCliente,
        novocliente,
        salvarCliente,
        exibirTabela
    }
  
}