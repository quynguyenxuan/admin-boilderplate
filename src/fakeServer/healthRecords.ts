import { date, name, internet, address, phone } from "faker/locale/vi";

import { randomDate, weightedBoolean } from "data-generator-retail/lib/utils";
import { randomAddress, randomArray, randomDescription, randomEnum, randomInt } from "./utils";
import { IHealthRecord, IPatientCareSchedule } from "../models";

export default (db: any, { serializeDate }: any): IHealthRecord[] => {

  let id = 0;

  return Array.from(Array(900).keys()).map(id => {
    const createdAt = randomDate();
    const updatedAt = randomDate(createdAt);
    const lastName = name.lastName();
    
    return {
        id,
        name: lastName,
        code: lastName,
        description: randomDescription(),
        patientId: randomArray([1,2,3]),
        employeeId: randomArray([1,2,3]),
        recordAt: randomDate(),
        createdAt,
        updatedAt,
    };
  });
};
