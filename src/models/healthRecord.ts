import { IAddress, IModelBase } from "./base";

export interface IHealthRecord extends IModelBase{
    name: string;
    code: string;
    description: string;
    employeeId: string;
    patientId: string;
    recordAt: Date;
}