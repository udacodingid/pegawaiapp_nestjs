export interface Pegawai{

    //deklarasi variable yang akan ditampung
    id : string,
    title : string,
    description : string,
    status
}

export enum PegawaiStatus{
    HONORER = 'HONORER',
    ASN = 'ASN',
    PENSIUN = 'PENSIUN'
}
