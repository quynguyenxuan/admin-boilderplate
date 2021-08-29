import { IModelBase } from "./base";

export interface IFood extends IModelBase{
    name: string;
    code: string;
    description: string;
    provider: string;
}