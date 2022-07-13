import { 
    Body, 
    Controller, 
    Delete, 
    Get, 
    Param, 
    Patch, 
    Post 
} from '@nestjs/common';
import { CreatCadastroDto } from 'src/dto/creat-cadastro.dto';
import { UpdateCadastroDto } from 'src/dto/update-cadastro.dto';
import { CadastroService } from './cadastro.service';



// @Controller('cadastro') é a rota desse controller
// rotas são os caminhos para as requisisções 
@Controller('cadastro')

export class CadastroController {

    // Para usar os metodos criados no service, devemos criar um constructor para receber a instancia do service
    // Para trabalhar com a instancia service, temos que criar uma variavel para tipar com o service
    constructor( private service: CadastroService){}
    
    // !!! aqui são os metodos de busca de dados !!!

    // @Get() É um decoretion que tem como função de busca
    @Get()
    findAll(){
        return this.service.findAll();
    }
    
    //@Get(': ') serve para buscas de parametros dinâmicos(específicos), no caso abaixo, o parametro é o id.
    // @param() é um decoretion que trabalha com vários parametro por rota, e para usar ele em uma aplicação, devemos criar uma varíavel, no caso abaixo, a varíacel é id
    @Get(':id')
    findOne(@Param('id') id: string){
        return this.service.findOne(id);
    }

    // !!! aqui será o metodo de criação de dados !!!

    // @Post() É um decoretion de criação de dados, ele recebe os dados vindo do front-end e os direciona ao corpo(banco de dados).
    // @Body() É um decoretion que tem como função conter os dados enviado pelo post.
    // creatCadastrodto serve para tipar os objetos do corpo de uma requisição
    @Post()
    create(@Body() creatCadastrodto: CreatCadastroDto){
        return this.service.creat(creatCadastrodto)
    }

    // !!! aqui são os metotodos de busca e alteração de dados !!!

    // @Patch(':id') É um decoration que tem a função de buscar e atualização de dados. E pra isso tem que trabalhar com os decoration @Param e @Body.
    // updateCadastrodto serve para tipar os objetos do corpo de uma requisição
    @Patch(':id')
    update(@Param('id') id: string, @Body() UpdateCadastroDto: UpdateCadastroDto ){
        return this.service.update(id, UpdateCadastroDto);
    }

    // @Delete(':id') É um decoration que tem a função de buscar e deletar um dado específico, por isso tem que trabalhar com o decoration @Param
    @Delete(':id')
    delete(@Param('id') id: string){
        return this.service.remove(id);
    }
}
