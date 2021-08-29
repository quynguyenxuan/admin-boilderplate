import { IModelBase } from "./base";

export interface IMedicine extends IModelBase{
    name: string;
    code: string;
    provider: string;
    description: string;
}