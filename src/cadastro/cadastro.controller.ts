import { 
    Body, 
    Controller, 
    Delete, 
    Get, 
    Param, 
    Patch, 
    Post } from '@nestjs/common';


// @Controller('cadastro') é a rota desse controller
// rotas são os caminhos para as requisisções 
@Controller('cadastro')

export class CadastroController {
    
    // !!! aqui são os metodos de busca de dados !!!

    // @Get() É um decoretion que tem como função de busca
    @Get()
    findAll(){
        return 'lista de cadastros.';
    }
    
    //@Get(': ') serve para buscas de parametros dinâmicos(específicos), no caso abaixo, o parametro é o id.
    // @param() é um decoretion que trabalha com vários parametro por rota, e para usar ele em uma aplicação, devemos criar uma varíavel, no caso abaixo, a varíacel é id
    @Get(':id')
    findOne(@Param('id') id: string){
        return `Cadastro ${id}.`
    }

    // !!! aqui será o metodo de criação de dados !!!

    // @Post() É um decoretion de criação de dados, ele recebe os dados vindo do front-end e os direciona ao corpo(banco de dados).
    // @Body() É um decoretion que tem como função conter os dados enviado pelo post.
    @Post()
    create(@Body() body){
        return body
    }

    // !!! aqui será os metotodos de busca e alteração de dados !!!

    // @Patch(':id') É um decoration que tem a função de buscar e atualização de dados. E pra isso tem que trabalhar com os decoration @Param e @Body.
    @Patch(':id')
    update(@Param('id') id: string, @Body() Body ){
        return `O cadastro ${id} foi atualizado.`
    }

    // @Delete(':id') É um decoration que tem a função de buscar e deletar um dado específico
    @Delete(':id')
    delete(@Param('id') id: string){
        return `O cadastro ${id} foi deletado com sucesso.`
    }
}
