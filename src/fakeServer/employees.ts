import { date, name, internet, address, phone } from "faker/locale/vi";

import { randomDate, weightedBoolean } from "data-generator-retail/lib/utils";
import { randomAddress, randomArray, randomDescription, randomEnum, randomInt } from "./utils";
import { ACUTE_ILLNESS, BACKGROUND_DISEASE, DESEASE_STATUS, EMPLOYEE_ROLE, GENDER, ISOLATION_METHOD, TEST_RESULTS } from "../models/constants";
import { IEmployee } from "../models/employee";

export default (db: any, { serializeDate }: any): IEmployee[] => {

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
        avatar,
        firstName,
        lastName,
        code: lastName,
        email,
        gender,
        birthDay,
        phoneNumber: phone.phoneNumber(),
        address: randomAddress(),
        role: randomEnum(EMPLOYEE_ROLE),
        createdAt,
        updatedAt,
    };
  });
};

