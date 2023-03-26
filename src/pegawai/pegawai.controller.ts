import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreatePegawaiDTO } from './dto/create-pegawai.dto';
import { FilterPegawaiDto } from './dto/filter-pegawai.dto';
import { UpdatePegawaiStatusDto } from './dto/update-pegawai.dto';
import { Pegawai } from './pegawai.model';
import { PegawaiService } from './pegawai.service';

@Controller('pegawai')
export class PegawaiController {

    constructor(private pegawaiService : PegawaiService){}

    // @Get()
    // getAllPegawai() : Pegawai[]{
    //     return this.pegawaiService.getAllDataPegawai();
    // }

    @Post()
    createPegawai(@Body() createPegawaiDto : CreatePegawaiDTO) : Pegawai{
        return this.pegawaiService.createPegawai(createPegawaiDto);
    }

    @Get('/:id')
    getPegawaiById(@Param('id')
        id: string
    ) : Pegawai{
        return this.pegawaiService.getPegawaiById(id);
    }

    @Delete('/:id')
    deletePegawai(@Param('id') id : string) : void{
        return this.pegawaiService.deletePegawai(id);
    }

    @Patch('/:id')
    updatePegawai(
        @Param('id') id :string,
        @Body()updateStatusDto  : UpdatePegawaiStatusDto,

    ) : Pegawai{
        const {status} = updateStatusDto;
        return this.pegawaiService.updatePegawai(id,status);
    }

    @Get()
    getAllPegawai(@Query() filterDto : FilterPegawaiDto) : Pegawai[]{
        if(Object.keys(filterDto).length){
            return this.pegawaiService.getPegawaiFilter(filterDto);
        }else{
            return this.pegawaiService.getAllDataPegawai();
        }
    }

}
