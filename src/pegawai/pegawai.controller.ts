import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePegawaiDTO } from './dto/create-pegawai.dto';
import { Pegawai } from './pegawai.model';
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


}
