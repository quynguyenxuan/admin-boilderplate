import { date, name, internet, address, phone } from "faker/locale/vi";

import { randomDate, weightedBoolean } from "data-generator-retail/lib/utils";
import { randomAddress, randomArray, randomDescription, randomEnum, randomInt } from "./utils";
import { IPatientCareSchedule } from "../models";

export default (db: any, { serializeDate }: any): IPatientCareSchedule[] => {

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
        startAt: randomDate(),
        endAt: randomDate(),
        scheduleAt: randomDate(),
        createdAt,
        updatedAt,
    };
  });
};

