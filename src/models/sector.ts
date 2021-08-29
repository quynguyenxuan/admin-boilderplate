import { IModelBase } from "./base";

export interface ISector extends IModelBase{
    name: string;
    code: string;
    description: string;
}