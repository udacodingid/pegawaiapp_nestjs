import {IsOptional, IsEnum, IsString} from "class-validator";
import { PegawaiStatus } from "../pegawai.model";

export class FilterPegawaiDto{
    // @IsOptional()
    // @IsEnum(PegawaiStatus)
    status? : PegawaiStatus;

    // @IsOptional()
    // @IsString()
    search? : string;
}