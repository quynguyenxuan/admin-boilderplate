import { date, name, internet, address, phone } from "faker/locale/vi";

import { randomDate, weightedBoolean } from "data-generator-retail/lib/utils";
import { randomAddress, randomArray, randomDescription, randomEnum, randomInt } from "./utils";
import { IMedicine } from "../models";

export default (db: any, { serializeDate }: any): IMedicine[] => {

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
        provider: lastName,
        createdAt,
        updatedAt,
    };
  });
};

