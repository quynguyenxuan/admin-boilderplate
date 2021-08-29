import { EMPLOYEE_ROLE, GENDER } from "./constants";
import { IAddress, IModelBase } from "./base";

export interface IUser extends IModelBase{
    fullName?: string;
    firstName: string,
    lastName: string,
    code: string;
    phoneNumber: string;
    email: string;
    birthDay: Date;
    address: IAddress;
    gender: GENDER;
}