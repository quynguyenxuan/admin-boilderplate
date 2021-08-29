import { EMPLOYEE_ROLE, GENDER } from "./constants";
import { IAddress, IModelBase } from "./base";

export interface IEmployee extends IModelBase{
    avatar: string;
    fullName?: string;
    firstName: string,
    lastName: string,
    address: IAddress,
    code: string;
    phoneNumber: string;
    email: string;
    birthDay: Date;
    gender: GENDER;
    role: EMPLOYEE_ROLE;
}