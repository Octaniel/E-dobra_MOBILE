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
export class Movimentacao {
    id: number;
    quantidadeSaldo:number;
    codigoCliente: string;
    nomeCliente: string;
    cliente2: string;
    tipoMovimentacao: string;
    estilo: string;
    dataCriacao: Date;
}
