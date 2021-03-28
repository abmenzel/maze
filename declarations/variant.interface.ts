import { IImage } from "./image.interface";

export interface IVariant {
    options: [
        {
            name: string;
            value: string;
        }
    ]
    price: number;
    compare_price?: number;
    images?: IImage[];
}