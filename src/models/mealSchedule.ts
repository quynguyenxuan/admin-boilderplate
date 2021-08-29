import { IAddress, IModelBase } from "./base";

export interface IMealSchedule extends IModelBase{
    name: string;
    code: string;
    sectorId: string;
    patientId: string;
    kitchenId: string;
    employeeId: string;
    foodIds: string[] | number[];
    count: number;
    scheduleFor: Date;
}