import { Injectable } from '@nestjs/common';
import { CreatePegawaiDTO } from './dto/create-pegawai.dto';
import { Pegawai, PegawaiStatus } from './pegawai.model';
import { v4 as uuid} from 'uuid';

@Injectable()
export class PegawaiService {

    private pegawais : Pegawai[] = [];

    //end point get data pegawai all
    getAllDataPegawai(){
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

}
