import { date, name, internet, address, phone } from "faker/locale/vi";

import { randomDate, weightedBoolean } from "data-generator-retail/lib/utils";
import { randomAddress, randomArray, randomDescription, randomEnum, randomInt } from "./utils";
import { IBed } from "../models/bed";

export default (db: any, { serializeDate }: any): IBed[] => {

  let id = 0;

  return Array.from(Array(900).keys()).map(id => {
    const createdAt = randomDate();
    const updatedAt = randomDate(createdAt);
    const lastName = name.lastName();
    
    return {
        id,
        name: lastName,
        code: lastName,
        roomId: randomArray([1,2,3]),
        createdAt,
        updatedAt,
    };
  });
};

