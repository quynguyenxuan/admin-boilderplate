import { ACUTE_ILLNESS, BACKGROUND_DISEASE, DESEASE_STATUS, GENDER, ISOLATION_METHOD, TEST_RESULTS } from './constants';
import { IModelBase, IAddress } from './base';

export interface IPatient extends IModelBase{
    code: string;
    avatar: string;
    fullName?: string;
    firstName: string,
    lastName: string,
    gender: GENDER;
    birthDay: Date;
    phoneNumber: string;
    address: IAddress;
    testResult: TEST_RESULTS;
    diseaseSymptoms: string;
    isolationAt: Date;
    hospitalizedAt: Date;
    hospitalDischargeAt: Date;
    employeeId: string;
    sectorId: string;
    roomId: string;
    bedId: string;
    isolationMethod: ISOLATION_METHOD;
    deseaseStatus: DESEASE_STATUS;
    backgroundDisease: BACKGROUND_DISEASE;
    acuteIlless: ACUTE_ILLNESS;
}