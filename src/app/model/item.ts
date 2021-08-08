import { Category } from "./category";

export interface Item{
    title: string;
    comments: string;
    publishedDate: Date;
    category: Category;
}