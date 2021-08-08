import { Item } from "./item";

export interface Category{
    name:string;
    father: number;
    items: Item[];
}