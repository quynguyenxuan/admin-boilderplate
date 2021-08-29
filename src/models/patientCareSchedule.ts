import { IAddress, IModelBase } from "./base";

export interface IPatientCareSchedule extends IModelBase{
    name: string;
    code: string;
    description: string;
    employeeId: string;
    patientId: string;
    startAt: Date;
    endAt?: Date;
    scheduleAt: Date;
}