import { IAddress, IModelBase } from "./base";

export interface IMedicationSchedule extends IModelBase{
    name: string;
    code: string;
    sectorId: string;
    patientId: string;
    employeeId: string;   
    medicine?: any;
    count: number;
    scheduleFor: Date;
}