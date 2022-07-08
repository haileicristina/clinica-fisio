import firebase from "../config";
import Client from "../../core/Client";
import ClienteRepositorio from "../../core/ClienteRepositorio";


export default class ColecaoCliente implements ClienteRepositorio {

    #conversor = {
        toFirestore(cliente: Client): firebase.firestore.DocumentData{
            return {
                nome: cliente.nome,
                idade: cliente.idade,
                email: cliente.email,
                telefone: cliente.telefone,
            };
        },
        fromFirestore(
            snapshot: firebase.firestore.QueryDocumentSnapshot,
            options: firebase.firestore.SnapshotOptions
            ): Client {
            const data = snapshot.data(options)!;
            return new Client(data.nome,data.idade, data.email,data.telefone, snapshot.id)
        }
    }
    
    async salvar(cliente: Client): Promise<Client> {
        if(cliente?.id) {
            await this.colecao().doc(cliente.id).set(cliente)
            return cliente
        } else {
            const docRef = await this.colecao().add(cliente)
            const doc = await docRef.get()
            return doc.data()
        }
    }

    async excluir(cliente: Client): Promise<void> {
        return this.colecao().doc(cliente.id).delete()
    }

    async obterTodos(): Promise<Client[]> {
        const query = await this.colecao().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private colecao() {
        return firebase.firestore()
        .collection('clientes')
        .withConverter(this.#conversor)
    }
}