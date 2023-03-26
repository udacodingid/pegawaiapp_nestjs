import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePegawaiDTO } from './dto/create-pegawai.dto';
import { Pegawai, PegawaiStatus } from './pegawai.model';
import { v4 as uuid} from 'uuid';
import { GetPegawaiStatusFilterDto } from './dto/get-pegawai-filter.dto';
import { UpdatePegawaiStatusDto } from './dto/update-pegawai.dto';

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

    deletePegawai(id:string) : void{
            const found = this.getPegawaiById(id);
            this.pegawais = this.pegawais.filter((pegawai) => pegawai.id !== found.id);
        
    }
        
    updatePegawai(
        id:string,
        status : string)
    {
        const coba = this.getPegawaiById(id);
        //const {fullname,moto,cv} = updateCobaDTO;
        coba.status = status;
      
        return coba;
    }


    getPegawaiById(id:string) : Pegawai{
           
            const found = this.pegawais.find((pegawai)=> pegawai.id === id);
            if(!found){
                throw new NotFoundException('Data not found');
            }
        
            return found;
        

            
    }

    getPegawaiWithFilters(filterDto : GetPegawaiStatusFilterDto) : Pegawai[]{
    const {status, search} = filterDto;
    //deklarasi sebuah array utk menampung nilai temporary
    let pegawais = this.getAllDataPegawai();

    //seleksi kondisi
    if(status){
        pegawais = pegawais.filter((pegawai) => pegawai.status === status);

    }
    //seleksi untuk search
    if(search){
        pegawais = pegawais.filter((pegawai) => {

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
