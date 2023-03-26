import { IsNotEmpty } from "class-validator";

export class CreatePegawaiDTO{

    @IsNotEmpty()
    title : string;

    @IsNotEmpty()
    description : string;
}