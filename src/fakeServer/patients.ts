import { date, name, internet, address, phone } from "faker/locale/vi";

import { randomDate, weightedBoolean } from "data-generator-retail/lib/utils";
import { randomAddress, randomArray, randomDescription, randomEnum, randomInt } from "./utils";
import { ACUTE_ILLNESS, BACKGROUND_DISEASE, DESEASE_STATUS, GENDER, ISOLATION_METHOD, TEST_RESULTS } from "../models/constants";
import { IPatient } from "../models/patient";

export default (db: any, { serializeDate }: any): IPatient[] => {

  let id = 0;

  return Array.from(Array(900).keys()).map(id => {
    const createdAt = randomDate();
    const updatedAt = randomDate(createdAt);
    const firstName = name.firstName();
    const lastName = name.lastName();
    const email = internet.email(firstName, lastName);
    const birthDay = date.past(60);
    const avatar = 
        'https://marmelab.com/posters/avatar-' +
        id +
          '.jpeg';
    const gender = randomEnum(GENDER);
    return {
        id,
        tenantId: 'sd',
        avatar,
        firstName,
        lastName,
        code: lastName,
        email,
        gender,
        birthDay,
        phoneNumber: phone.phoneNumber(),
        address: randomAddress(),
        testResult: randomEnum(TEST_RESULTS),
        diseaseSymptoms: randomDescription(),
        isolationAt: randomDate(),
        hospitalizedAt: randomDate(),
        hospitalDischargeAt: randomDate(),
        employeeId: randomArray([1,2,3]),
        sectorId: randomArray([1,2,3]),
        roomId: randomArray([1,2,3]),
        bedId: randomArray([1,2,3]),
        isolationMethod: randomEnum(ISOLATION_METHOD),
        deseaseStatus: randomEnum(DESEASE_STATUS),
        backgroundDisease: randomEnum(BACKGROUND_DISEASE),
        acuteIlless: randomEnum(ACUTE_ILLNESS),
        createdAt,
        updatedAt,
    };
  });
};

