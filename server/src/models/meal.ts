import { RowDataPacket } from "mysql2";

export interface Meal extends RowDataPacket{
    id?:number;
    name:string;
    description:string;
    price:number;
    image:string;
}