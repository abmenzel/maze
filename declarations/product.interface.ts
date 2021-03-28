import { IVariant } from "./variant.interface";
import { IVendor } from "./vendor.interface";

export interface IProduct {
    title: string;
    type: string;
    handle: string;
    description?: string;
    variants: IVariant[];
    vendor?: IVendor;
}