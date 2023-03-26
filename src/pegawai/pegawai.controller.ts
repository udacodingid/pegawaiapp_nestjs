import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreatePegawaiDTO } from './dto/create-pegawai.dto';
import { GetPegawaiStatusFilterDto } from './dto/get-pegawai-filter.dto';
import { UpdatePegawaiStatusDto } from './dto/update-pegawai.dto';
import { Pegawai, PegawaiStatus } from './pegawai.model';
import { PegawaiService } from './pegawai.service';

@Controller('pegawai')
export class PegawaiController {

    constructor(private pegawaiService : PegawaiService){}

    @Get()
    getAllPegawai() : Pegawai[]{
        return this.pegawaiService.getAllDataPegawai();
    }

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
    deleteTask(@Param('id') id : string) : void{
        return this.pegawaiService.deletePegawai(id);
    }

    @Patch('/:id')
    updateCoba(
            @Param('id') id:string,
            
            @Body() updateCobaDto: UpdatePegawaiStatusDto,
    ): Pegawai {
    const { status } = updateCobaDto;
    return this.pegawaiService.updatePegawai(id, status);
    }

    @Get()
    getPegawai(@Query() filterDto : GetPegawaiStatusFilterDto) : Pegawai[] {
        if(Object.keys(filterDto).length){
            return this.pegawaiService.getPegawaiWithFilters(filterDto);
        }else{
            return this.pegawaiService.getAllDataPegawai();
        }
    }


}
