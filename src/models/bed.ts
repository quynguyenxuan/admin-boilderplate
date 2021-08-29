import { IModelBase } from "./base";

export interface IBed extends IModelBase{
    name: string;
    code: string;
    roomId: string;
}