import { date, name, internet, address, phone } from "faker/locale/vi";

import { randomDate, weightedBoolean } from "data-generator-retail/lib/utils";
import { randomAddress, randomArray, randomDescription, randomEnum, randomInt } from "./utils";
import { IMedicationSchedule } from "../models";

export default (db: any, { serializeDate }: any): IMedicationSchedule[] => {

  let id = 0;

  return Array.from(Array(900).keys()).map(id => {
    const createdAt = randomDate();
    const updatedAt = randomDate(createdAt);
    const lastName = name.lastName();
    
    return {
        id,
        name: lastName,
        code: lastName,
        sectorId: randomArray([1,2,3]),
        patientId: randomArray([1,2,3]),
        employeeId: randomArray([1,2,3]),
        count: randomInt(1,3),
        medicine: {1: 3},
        scheduleFor: randomDate(),
        createdAt,
        updatedAt,
    };
  });
};

