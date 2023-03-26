// import { IsEnum } from "class-validator";

import { IsEnum } from "class-validator";
import { PegawaiStatus } from "../pegawai.model";


export class UpdatePegawaiStatusDto{

    @IsEnum(PegawaiStatus)
    status : PegawaiStatus;
}