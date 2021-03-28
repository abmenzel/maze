import { ILocation } from "./location.interface";
import { IVariant } from "./variant.interface";

export interface IProduct {
    title: string;
    description: string;
    variants: IVariant[];
    location: ILocation;
}