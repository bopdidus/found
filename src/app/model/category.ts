import { Item } from "./item";

export interface Category{
    id:number;
    name:string;
    father: number;
    items: Item[];
}