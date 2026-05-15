import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('recados')
export class RecadosController {
    // Encontrar todos os recados
    @Get()
    findall() {
        return 'Essa rota retorna todos os recados';
}
    @Get(':id')
    findOne(@Param('id') id: string) {
        return `Essa rota retorna o recado com ID: ${id}`;
    }

    @Post()
    create(@Body() body: any) {
        return body;
    }
}