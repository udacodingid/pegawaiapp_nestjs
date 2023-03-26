import { IsEnum, IsOptional, IsString } from "class-validator";
import { PegawaiStatus } from "../pegawai.model";


export class GetPegawaiStatusFilterDto{

    @IsOptional()
    @IsEnum(PegawaiStatus)
    status? : PegawaiStatus;

    @IsOptional()
    @IsString()
    search? : string;
}

// tanda ? : nullable --> handle value nul