import { IAddress, IModelBase } from "./base";

export interface IKitchen extends IModelBase{
    name: string;
    code: string;
    description: string;
    address: IAddress;
}