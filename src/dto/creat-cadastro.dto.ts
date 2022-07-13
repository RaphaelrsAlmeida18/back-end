export class CreatCadastroDto {
    // Como essa classe só define o que o corpo deve receber, como um fiotro para verificar se os dados.
    // readonly define que esses objetos são somente para leitura, enão para criação.
    readonly nome:       string;
    readonly sobrenome:  string;
    readonly cpf:        number;
    readonly email:      string;
    readonly telefone:   number;
}
