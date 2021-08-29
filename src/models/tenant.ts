import { IAddress, IModelBase } from "./base";

export interface ITenant extends IModelBase {
    name: string;
    address: IAddress;
}