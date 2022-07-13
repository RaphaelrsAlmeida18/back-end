export class UpdateCadastroDto {
    // essa class tem quase a mesma função que a class creatCadastrodto, o que diferencia é que os objetos são opcionais.
    // "?" serve para dizer que o objeto é opcional.
    readonly nome?:       string;
    readonly sobrenome?:  string;
    readonly cpf?:        number;
    readonly email?:      string;
    readonly telefone?:   number;
}
