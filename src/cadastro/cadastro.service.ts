import { Injectable } from '@nestjs/common';
import { cadastro } from './entities/cadastro.entities';

@Injectable()
export class CadastroService {
    private cadastros: cadastro[] = [
       {
        id: 1,
        nome: 'Raphael',
        sobrenome: 'Almeida',
        cpf: 12345678900,
        email: 'teste@gmail',
        telefone: 98765432100
       },
    ];
    // !!! Aqui estarão os metodos de serviço e suas funções !!!

    // !!! Aqui estão os metodos de busca de dados !!!
    findAll(){
        return this.cadastros;
    }

    // id: string é o primeiro parametro, ele será usado para buscar somente o id na tabela, porém, poderia ser para buscar outras coisas.
    // o metodo find tem a função de busca .
    findOne(id: string){
        return this.cadastros.find((cadastro: cadastro) => cadastro.id === Number(id));
    }

    // !!! Aqui esta o metodo de criação de dados !!!

    // O parametro (creatCadastrodto: any) 
    // O metodo push é o que joga as informações no banco de dados
    creat(creatCadastrodto: any){
        this.cadastros.push(creatCadastrodto);
    }

    // !!! Aqui estão os metodos de busca e de manipulação de dados !!!

    // Os parametros desse metodo tem a mesma função que os parametros de findOne e creat, pois ele é um metodo de busca e alteração de dados
    // 
    update(id: string, updateCadastrodto: any){
        const indexCadastro = this.cadastros.findIndex((cadastro: cadastro) => cadastro.id === Number(id));

        this.cadastros[indexCadastro] = updateCadastrodto;
    }

    // Este metodo tem como função, busca e deletar, o parametro de busca é pelo id, mas pode varia dependendo da regras de negócio.
    // o if serve para verificar se o objeto de busca esta na tabela, se ele estiver, então vai executar a função
    // o metodo splice tem a função de remover um objeto dentro de uma tabela, mas pra isso ela recebe como parametro (indexCadastro, 1) o indexcadastro e a quantidade de objetos que vai remover 
    remove(id: string){
        const indexCadastro = this.cadastros.findIndex((cadastro: cadastro) => cadastro.id === Number(id));
        if(indexCadastro >= 0){
            this.cadastros.splice(indexCadastro, 1);
        }
    }
}
