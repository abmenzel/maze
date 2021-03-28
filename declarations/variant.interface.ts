import { IImage } from "./image.interface";

export interface IVariant {
    options: [
        {
            name: string;
            value: string;
        }
    ]
    price: number;
    images: IImage[];
}