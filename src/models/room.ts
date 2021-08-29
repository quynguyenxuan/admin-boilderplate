import { IModelBase } from "./base";

export interface IRoom extends IModelBase{
    name: string;
    code: string;
    sectorId: string;
}