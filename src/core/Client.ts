export default class Client{
    #id: string
    #nome: string
    #idade: string
    #email: string
    #telefone:string

    constructor(nome:string,idade:string, email:string,telefone:string, id:string = null){
        this.#nome = nome,
        this.#idade = idade,
        this.#email = email,
        this.#telefone = telefone,
        this.#id = id

    }

    static vazio(){
        return new Client('', '', '', '', '')
    }

    get id(){
        return this.#id
    }

    get nome(){
        return this.#nome
    }
    get idade(){
        return this.#idade
    }

    get email(){
        return this.#email
    }
    get telefone(){
        return this.#telefone
    }

}