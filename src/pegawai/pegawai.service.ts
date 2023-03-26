import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePegawaiDTO } from './dto/create-pegawai.dto';
import { Pegawai, PegawaiStatus } from './pegawai.model';
import { v4 as uuid} from 'uuid';
import { retry } from 'rxjs';
import { FilterPegawaiDto } from './dto/filter-pegawai.dto';

@Injectable()
export class PegawaiService {

    private pegawais : Pegawai[] = [];

    //end point get data pegawai all
    getAllDataPegawai() : Pegawai[]{
        return this.pegawais;
    }

    //ini method add atau create
    createPegawai(createPegawaiDTO : CreatePegawaiDTO) : Pegawai{
        const {
            title, description
        } = createPegawaiDTO;

        const pegawai : Pegawai = {
            id : uuid(),
            title,
            description,
            status : PegawaiStatus.ASN
        };
        this.pegawais.push(pegawai);
        return pegawai;

    }

    deletePegawai(id:string) : void{
        const found = this.getPegawaiById(id);
        this.pegawais = this.pegawais.filter((pegawai)=> pegawai.id !== found.id);
    }

    getPegawaiById(id:string) : Pegawai{
        const found = this.pegawais.find((pegawai) => pegawai.id == id);
        if(!found){
            throw new NotFoundException('Data tidak ditemukan');
        }

        return found;

    }

    updatePegawai(
        id:string,
        status:string
    ){
        const updateData = this.getPegawaiById(id);
        updateData.status = status;
        return updateData;
    }

    getPegawaiFilter(filterDto : FilterPegawaiDto) : Pegawai[]{
        const {status, search} = filterDto;

        //array penampung data yang sudah di filter
        let pegawais = this.getAllDataPegawai();

        //cek kondisi
        if(status){
            pegawais = pegawais.filter((pegawais)=> pegawais.status === status);

        }

        //cek search
        if(search){
            pegawais = pegawais.filter((pegawai)=> {
                if(pegawai.title.includes(search)
                    || pegawai.description.includes(search)){
                        return true;
                    }
                return false;
            });
        }
        return pegawais;
    }

}

//validator
// npm i --save class-validator class-transformer