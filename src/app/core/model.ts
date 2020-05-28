export class Pessoa{
    id: number;
    nome: string;
    email: string;
    nConta: string;
    morada: string;
    telemovel: string;
    nif: string;
    dataNascimento: Date;
    banco = new Banco();
}
export class Banco{
    id: number;
    nome: string;
    email: string;
    nif: string;
}
